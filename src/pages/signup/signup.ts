import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController  } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SimpleGlobal } from 'ng2-simple-global';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage { 
  signUpForm = {
    name: '',
      email: '',
      mobileNo: '',
      password: '',
      confirmPassword: ''
  }
  //signUpForm: FormGroup;
  loading:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
     private sg: SimpleGlobal, private alertCtrl: AlertController, private storage: Storage,
     public loadingCtrl: LoadingController) {
   /* this.signUpForm = this.formBuilder.group({
      name: [''],
      email: [''],
      mobileNo: [''],
      password: [''],
      confirmPassword: ['']
      
    });*/
    this.signUpForm.mobileNo = this.navParams.get('mobileNo');
    this.loading = this.loadingCtrl.create({
      spinner: 'dots'
    });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

   saveProfile(){
     this.loading.present();

    //console.log(this.signUpForm);
    //this.showPopup(this.signUpForm.password, this.signUpForm.confirmPassword);
    if (this.signUpForm.password != this.signUpForm.confirmPassword) {
      this.showPopup("Error", 'The password confirmation does not match.');
      this.loading.dismiss();
    } else {
      var currentUser = {
        name:'',
        email:'',
        mobileNo: ''
      }

      currentUser.name = this.signUpForm.name;
      currentUser.email = this.signUpForm.email;
      currentUser.mobileNo = this.signUpForm.mobileNo;
      this.storage.set('currentUser', currentUser);
      this.storage.set('isFirstimeUser', true);
      this.sg['currentUser'] = currentUser;
      this.navCtrl.push('HomePage');

      this.loading.dismiss();
    }
  }


  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            
          }
        }
      ]
    });
    alert.present();
  }
}
