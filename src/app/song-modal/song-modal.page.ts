import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-song-modal',
  templateUrl: './song-modal.page.html',
  styleUrls: ['./song-modal.page.scss'],
})
export class SongModalPage implements OnInit {
  artists_name: any;
  artists_id: any;
  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.artists_name = this.navParams.get('name');
    this.artists_id = this.navParams.get('id');
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
