import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:any = [];
  name:String = "";
  imageString:String = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('user');
    this.name = this.user.name;
    this.imageString = this.user.picture.data.url;
  }
  
}
