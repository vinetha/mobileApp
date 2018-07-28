import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SimpleGlobal } from 'ng2-simple-global';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { StorageService } from '../utils/storage.service';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html',
  providers: [StorageService]
})
export class MyApp {
  isFirstTimeUser:any;
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private sg: SimpleGlobal, private storage: Storage) {
    platform.ready().then(() => {
      this.storage.get('isFirstimeUser').then((val) => {
        if(!val){
          this.rootPage = LoginPage;
        }
        else{
          this.storage.get('currentUser').then((val) => {
            console.log(val);
            this.sg['currentUser'] = val;
            this.rootPage = HomePage;

          });
          
        }
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

