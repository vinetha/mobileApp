import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginAction()
  {
    console.log("Inside function")
      // Login with permissions
      this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
      .then( (res: FacebookLoginResponse) => {
  
          // The connection was successful
          if(res.status == "connected") {
  
              // Get user ID and Token
              var fb_id = res.authResponse.userID;
              var fb_token = res.authResponse.accessToken;
  
              // Get user infos from the API
              this.fb.api("/me?fields=name,gender,birthday,email,picture", []).then((user) => {
  
                  // Get the connected user details
                  console.log(user)
        
  
                  // => Open user session and redirect to the next page
                  this.navCtrl.setRoot('HomePage',{
                    user:user
                }); 
  
              });
  
          } 
          // An error occurred while loging-in
          else {
  
              console.log("An error occurred...");
  
          }
  
      })
      .catch((e) => {
          console.log('Error logging into Facebook', e);
      });
  }
  
  login(){
    console.log("Inside login")
  }

  redirectToSignup(){
    this.navCtrl.push('SignupPage');
  }
}
