import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { ModalController } from '@ionic/angular';
import { SongModalPage } from '../song-modal/song-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  artistsJson: any; 
  artists: any;

  constructor(
    private musicService: MusicService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.artistsJson = this.musicService.getArtistsJson().artists;
    // console.log("Json", this.artistsJson);
    this.musicService.getArtists().subscribe((data: any) => {
      this.artists = data
      // console.log(this.artists)
    })
  }

  async showSongs(artist: any) {
    this.musicService.getArtistTracks(artist.id).subscribe(async (songs: any) => {
      const modal = await this.modalController.create({
        component: SongModalPage,
        componentProps: {
          name: artist.name,
          id: artist.id,
          songs: songs
        }
      });
      await modal.present();
    });
  }

}
