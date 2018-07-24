import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { SimpleGlobal } from 'ng2-simple-global';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user:any = [];
  name:String = "";
  imageString:String = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private sg: SimpleGlobal) {
    console.log(this.sg['currentUser']);
    //this.user = this.navParams.get('user');
    this.name = this.sg['currentUser'].name;
   // this.imageString = this.user.picture.data.url;
  }
  
}
