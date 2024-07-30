import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  constructor(
    private menu: MenuController,
    private navCtrl: NavController
  ) { }

  closeMenu() {
    this.menu.close();
  }

  logout() {
    console.log("Cerrar sesión")
    this.navCtrl.navigateRoot("/login")
  }

}
