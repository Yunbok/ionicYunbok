import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NextPage } from '../next/next';
import { LoginPage } from '../login/login';
import { NotificationPage } from '../notification/notification';
import { CctvPage } from '../cctv/cctv';
import { UserListPage } from '../user-list/user-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  serialnum:string;
  arr = [];
  constructor(public navCtrl: NavController,public navParams: NavParams) {
   //this.navParams.get()
   this.serialnum = this.navParams.get('text')
   this.arr = ["Jan","Feb","Mar","Apr il","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  }
  moveToHomePage(){
    this.navCtrl.push(LoginPage);
  } 
  moveToinputPage(){
    this.navCtrl.push(NextPage);
  } 
  ionViewDidLoad() { //페이지 호출되면 바로실행하는함수인듯
    console.log(this.serialnum);
  }
  moveToNotificationPage(){
    this.navCtrl.push(NotificationPage, {text:this.serialnum,array:this.arr})
  }
  
  moveToCCTVPage(){
    this.navCtrl.push(CctvPage)
  }
  
  moveToUserListPage(){
    this.navCtrl.push(UserListPage)
  }
}
