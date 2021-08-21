import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Artist } from './artists/artist.model';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtistService implements OnInit {
 private artistsUrl: string;
 public artist: Artist;
 public artists: Artist[];
 public editMode: boolean;
 public deleteMode: boolean;
 public headers = new HttpHeaders({'Content-Type': 'application/json'});


   public artistSub = new Subject<Artist>();
   public editSub = new Subject<boolean>();
   public deleteSub = new Subject<Artist>();

  ngOnInit() {

  }

  public setArtists(artists: any){
    this.artists = artists;
  }

  public getArtists(): Artist[]{
    return this.artists;
  }

  constructor(private http: HttpClient) {
    this.artistsUrl = 'http://localhost:8080/artists/';
  }

  getArtist(id: number): Observable<Artist>{
   return this.http.get<Artist>(`${this.artistsUrl}/${id}`); 
  }

  public findAll() : Observable<Artist[]> {
    return this.http.get<Artist[]>(this.artistsUrl);
  }

  public save(user: Artist): Promise<Artist> {
    return this.http.post<Artist>(`${this.artistsUrl}/save`, user,{headers: this.headers})
    .toPromise()
    .then(() => this.artist)
    .catch();
  }

  public isPrev(): Observable<any>{
    return this.http.get(`${this.artistsUrl}/isprev`);
  }
 
  public isNext(): Observable<any>{
    return this.http.get(`${this.artistsUrl}/isnext`);
  }

  public getPrev(): Observable<Artist[]>{
    return this.http.get<Artist[]>(`${this.artistsUrl}/getPrev`);
  }
 
  public getNext(): Observable<Artist[]>{
    return this.http.get<Artist[]>(`${this.artistsUrl}/getnext`);
  }

  public deleteItem(artist: Artist): Promise<Artist> {
        let indexdeleted = this.artists.indexOf(artist) + 1;
    this.deleteMode = true;
    this.artists.splice(this.artists.indexOf(artist),1);
    return this.http.delete<Artist>(`${this.artistsUrl}/delete/${indexdeleted}`,{headers: this.headers})
    .toPromise()
      .then(() => artist)
      .catch();
  }

  public editItem(artist: Artist) {
    this.editMode = true;
  }

  public updateItem(artist: Artist): Promise<Artist> {
    let index = this.artists.indexOf(artist);
    this.artists[index].name = artist.name;
    this.artists[index].age = artist.age;
    this.artists[index].catchphrase = artist.catchphrase;
    this.artists[index].description = artist.description;
    this.artists[index].ArtistId = index +1;
    console.log(artist);
    // this.setArtists(this.artists);

    return this.http.put<Artist>(`${this.artistsUrl}/update`,JSON.stringify(artist),{headers: this.headers})
    .toPromise()
      .then(() => artist)
      .catch();
  }
}