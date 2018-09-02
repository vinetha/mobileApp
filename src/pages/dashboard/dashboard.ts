import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FoodmenuPage } from '../foodmenu/foodmenu';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

nextPage = FoodmenuPage;
img:string = 'http://imageresizerbucket.s3-website-us-east-1.amazonaws.com/500x500/restaurant3.jpg'; 

private restaurantDetails:any = []
private zipcodes:string[] = ['99501','73310','73301'];

  constructor(private navCtrl: NavController, private http: Http ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    let randomZipcode  = this.zipcodes[Math.floor(Math.random() * this.zipcodes.length)];
    this.getRestaurantDetails(randomZipcode);
  }

  getRestaurantDetails(randomZipcode){
    let url = 'https://api.mlab.com/api/1/databases/foodapp/collections/Restaurants?apiKey=bA9oPvmAio1SmN4z1C9OH3-HBMozVbsN&q={"Zipcode":"'+randomZipcode+'"}&s=&f=&pageSize=10&pageNum=0';
    this.http.get(url).subscribe(response=>{
      console.log(response.json());
      this.restaurantDetails = response.json();
    })
  }


  redirectMap(){
    this.navCtrl.setRoot('HomePage');
  }

}
