import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feeds',
  templateUrl: 'feeds.html',
})
export class FeedsPage {

	public nome_usuario: string = "Hugo Leonardo";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaNumeros(): void{
	alert("Hugo Leonardo");
}

 ionViewDidLoad() {
    //this.somaNumeros();
  }

}
