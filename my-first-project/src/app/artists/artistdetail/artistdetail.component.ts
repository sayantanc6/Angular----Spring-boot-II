import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ArtistService } from 'src/app/artist.service';
import { Artist } from '../artist.model';


@Component({
  selector: 'app-artistdetail',
  templateUrl: './artistdetail.component.html',
  styleUrls: ['./artistdetail.component.css']
})
export class ArtistdetailComponent implements OnInit,OnDestroy {

  public subscription: Subscription;
  public obsartist: Observable<Artist>;
  public artist: Artist;
  public isEditMode:boolean;

  public id: number;

  constructor(public artistService: ArtistService) { }

  ngOnInit() {
        this.artistService.artistSub.subscribe(res => {
          this.isEditMode = false;
      this.artist = res;
      console.log(this.artist.name +','+ this.artist.age +','+this.artist.catchphrase+','+this.artist.description);
    });
  }

  ngOnDestroy() {
    this.artistService.editMode = false;
  }

  onEdit(artist: Artist) {
    this.artistService.editItem(artist);
    this.artistService.editMode = true;
    this.isEditMode =true;
  }

  onDelete(artist: Artist) {
    this.artistService.deleteItem(artist);
  }

  onUpdate(artist: Artist) {
    this.artistService.updateItem(artist);
  }
}
