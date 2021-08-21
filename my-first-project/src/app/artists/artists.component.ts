import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artist.service';
import { Artist } from './artist.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  public obsartists: Observable<Artist[]>;
  public obsisPrev: Observable<any>;
  public obsisNext: Observable<any>;
  public obsartistsnext: Observable<Artist[]>;
  public obsartistsprev: Observable<Artist[]>;


  constructor(public artistService: ArtistService,public router: Router) { }

  artists: Object;
  isPrev = true;
  isNext = true;

  searchedKeyword: string;

  ngOnInit() {

    this.obsartists =  this.artistService.findAll();
    this.obsartists.subscribe( res => {
    this.artists = res;
    this.artistService.setArtists(this.artists);
   });

   this.obsisPrev = this.artistService.isPrev();
   this.obsisPrev.subscribe( res => {
     this.isPrev = res;
   });

   this.obsisNext = this.artistService.isPrev();
   this.obsisNext.subscribe( res => {
     this.isNext = res;
   });
  }

  public onNavigate() {
    this.router.navigate(['templateForms']);
  }

  public sendArtist(artist: Artist) {
    this.artistService.artistSub.next(artist);
  }

  public getnext() {
    this.obsartistsnext = this.artistService.getNext();
    this.obsartistsnext.subscribe(res => {
      this.artists = res;
    });
  }

  public getprev() {
    this.obsartistsprev = this.artistService.getPrev();
    this.obsartistsprev.subscribe(res => {
      this.artists = res;
    });
  }
}