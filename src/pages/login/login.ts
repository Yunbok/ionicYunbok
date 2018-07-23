import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {HomePage} from '../home/home';
import { HttpHeaders, HttpClient } from '../../../node_modules/@angular/common/http';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  serialnum:string;

  name:any;
  img:any;
  serialnumPlaceHolder:string="시리얼 번호를 입력해주세요";

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient,private alertController:AlertController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  moveToHomePage(){
    this.navCtrl.push(HomePage,{text:this.serialnum});
  } 
  login(){
  let body = {username:this.name, password:this.img};
    let url = "http://localhost:8100/login";
    let headers = new HttpHeaders({'Content-Type' : 'application/json'});

    this.http.post(url,body,{headers:headers}).subscribe((res:any)=>{
      console.log("res:" + JSON.stringify(res));
      let response= res;
      if(response.result=="success"){
        this.navCtrl.setRoot(HomePage);

      }
      else{
        let alert = this.alertController.create({
          title: '로그인에 실패했습니다.',
          buttons: ['ok']
        });
        alert.present();

      }
    },(err)=>{
      console.log("post-err:" + JSON.stringify(err));
    });
  }
}

