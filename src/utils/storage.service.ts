import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class StorageService {

  constructor(private storage: Storage) { }

  setStorageData(key, data) {
    //if (this.plt.is('mobile')) {
      this.storage.set(key, data);
    /*}
    else{

    }*/
  }

  getStorageData(key) {
   // if (this.plt.is('mobile')) {
      this.storage.get(key).then((val) => {
        console.log('Your age is', val);
        return val;
      });
   // }
  }


}