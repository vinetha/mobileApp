import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { LoginService } from './login.service';
import { StorageService } from '../../utils/storage.service';

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
  providers: [LoginService, StorageService]
})
export class LoginPage {
  public mobileNo = '';
  public otp = '';
  public isOtpValidation = false;
  public payload = {
    mobileNo: ''
  }
  loading: any;
  constructor(public navCtrl: NavController, public storage: StorageService, 
    public navParams: NavParams, public loginService: LoginService, public loadingCtrl: LoadingController) {

      this.loading = this.loadingCtrl.create({
        spinner: 'dots'
      });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  validateMobile(){
    const load = this.loadingCtrl.create({
      spinner: 'dots'
    });
   load.present();
    try {
      this.loginService.mobileNoValidate(this.mobileNo)
        .subscribe(resp => {
          //console.log(resp, "res");
          load.dismiss()
          this.isOtpValidation = true;
        },
          error => {
            load.dismiss();
            console.log(error, "error");
          })
    } catch (e) {
      load.dismiss();
      console.log(e);
    }
    
  }

  reSendOtp() {
    const load = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Resending the OTP..'
    });

    load.present();
    try {
      this.loginService.otpValidation(this.mobileNo, this.otp)
        .subscribe(resp => { 
          this.otp = '';
          load.dismiss();
        },
          error => {
            load.dismiss();
            console.log(error, "error");
          })
    } catch (e) {
      load.dismiss();
      console.log(e);
    }

  }

  validateOTP(){
    const load = this.loadingCtrl.create({
      spinner: 'dots'
    });
   load.present();
    try {
      console.log(this.otp);
      this.loginService.otpValidation(this.mobileNo, this.otp)
        .subscribe(resp => { 
          if(this.otp == '1234'){
            
            this.payload.mobileNo = this.mobileNo;
            
            this.redirectToSignup();

          }else{
            this.otp = '';
            alert('Invalid OTP');
          }
          load.dismiss();
        },
          error => {
            load.dismiss();
            console.log(error, "error");
          })
    } catch (e) {
      load.dismiss();
      console.log(e);
    }
    
  }
 /* loginAction()
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
  }*/
  
  login(){
    console.log("Inside login")
  }

  redirectToSignup(){
    
    this.navCtrl.push('SignupPage', this.payload);
  }
}
