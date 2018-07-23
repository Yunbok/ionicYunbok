import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  name:any;
  img:any;
  num:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = this.navParams.get("name");
    this.img = this.navParams.get("imgurl");
    this.num = this.navParams.get("num");

  }

  ionViewDidLoad() {
    console.log(this.num);
    
  }

}