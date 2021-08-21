import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/artist.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  public artist:any = {};

  constructor(public artistservice: ArtistService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.artist.ArtistId = this.artistservice.getArtists().length + 2;
    console.log(this.artist);
    
    this.artistservice.save(this.artist);
  }
}
