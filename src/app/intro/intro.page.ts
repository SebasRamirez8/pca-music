import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage  {

 slides = [
    {
      title: "Volando",
      image: "https://i.scdn.co/image/ab67616d0000b273dcec31b44548687b2a81d0c2"
    },
    {
      title: "Par de tenis",
      image: "https://i1.sndcdn.com/artworks-7vIpidxIV7WD-0-t500x500.jpg"
    },
    {
      title: "Dákiti",
      image: "https://i1.sndcdn.com/artworks-zfACAqK6jdlKsUui-zPjwNg-t500x500.jpg"
    },
    {
      title: "Tusa",
      image: "https://cdns-images.dzcdn.net/images/cover/eacb2df2f49b1e67266ed70c8debd8d3/1900x1900-000000-80-0-0.jpg"
    },
    {
      title: "Hawái",
      image: "https://i.scdn.co/image/ab67616d0000b27387d15f78ec75621d40028baf"
    },
    {
      title: "Polaris",
      image: "https://i1.sndcdn.com/artworks-ZJOFZQ3H9zAp-0-t500x500.jpg"
    }
  ]

  constructor(private router: Router, private storage: Storage) {}

  close() {
    this.storage.set("IsIntroShowed", true);
    this.router.navigateByUrl("/home");
  }

}
