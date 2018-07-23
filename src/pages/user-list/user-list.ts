import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InfoPage } from '../info/info';
//import {HTTP} from '@ionic-native/http'
/**
 * Generated class for the UserListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {
  months=[];
  names=[];
  USER:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.months=["Jan","Feb","Mar","Apr il","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];//db에서 이름받아와서 목록 만들면 될듯..
    this.names = [1,2,3,4,5,6,7,8,9,10,11,12];

    // this.http.get('http://ionic.io', {}, {})
    // .then(data => { 
    //   console.log(data.status);
    //   console.log(data.data);
    //   console.log(data.headers);

    // })
    // .catch(error => {
    //   console.log(error.status);
    //   console.log(error.error);
    //   console.log(error.headers);

    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListPage');
  }

  moveToInfoPage(){
    this.navCtrl.push(InfoPage, {num:this.USER,name:this.months[this.USER-1],imgurl:this.names[this.USER-1]});
  }

}
