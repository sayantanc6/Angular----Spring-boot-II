import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Artist } from '../artist.model';
import { ArtistService } from 'src/app/artist.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit,OnDestroy {

  constructor(public artistservice: ArtistService) { }

  @Input() artist: Artist;
  @Input() index: number;

  artists: Artist[];

  ngOnInit() {
  
  }

    getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  
  public ngOnDestroy() {
    this.artistservice.editMode = false;
    this.artistservice.deleteMode = false;
  }
}
