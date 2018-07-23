import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  months=[];
  names=[];

  num:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.num = this.navParams.get('text');  
  this.months = this.navParams.get('array')//db에서 이름받아와서 목록 만들면 될듯..
  this.names = [1,2,3,4,5,6,7,8,9,10,11,12];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }



}
