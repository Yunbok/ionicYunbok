import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InfoPage } from '../info/info';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map'
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
 
  data:string;
  constructor(public http: Http ,public navCtrl: NavController, public navParams: NavParams) {
    
  }
    moveToInfoPage(name:any){

      //console.log(this.data.field1);
     console.log(name);
      this.navCtrl.push(InfoPage,{db:name});
      
    }
   
  
   
    ionViewDidLoad() {
      this.loadUser();  
    
    }
  
    loadUser(){
      this.http.get('https://api.thingspeak.com/channels/404178/feeds.json?results=10')
      .map(res => res.json())
      .subscribe(data =>{
        this.data = data.feeds;
        console.log(data.feeds);
  
      }
      ,err => {
        console.log(err);
  
      });
    }
  
  
 
  
}
