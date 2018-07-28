import { NavController, IonicPage, Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

declare var google:any;


@IonicPage()
@Component({
selector: 'page-home',
templateUrl: 'home.html'
})


export class HomePage{
  
map: any;
marker:any;
point: any;
geocoder:any;

constructor(public navCtrl: NavController, private geolocation: Geolocation, private platform: Platform) {
}

ionViewDidLoad() {

this.initMap();
}

public initMap() {
  
  this.geocoder = new google.maps.Geocoder;
  
  this.platform.ready().then(() => {
 
  this.geolocation.getCurrentPosition().then((resp) => {
  this.point = {lat: resp.coords.latitude, lng: resp.coords.longitude};

        let divMap = (<HTMLInputElement>document.getElementById('map'));
        var map = new google.maps.Map(divMap, {
        center: this.point,
        zoom: 16,
        disableDefaultUI: true,
        draggable: true,
        zoomControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        var marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        position: map.getCenter()
        });
        
        marker.bindTo('position', map, 'center');
        this.getLocationName(map.getCenter());
       google.maps.event.addListener(map,'dragend', function(a){
          var geo = new google.maps.Geocoder
          geo.geocode({
            'location': map.getCenter()
          }, 
          function(results, status){
              if (results[0]) {
                var addr = <HTMLInputElement>(document.getElementById('address'))
                addr.value = results[0].formatted_address;
                console.log(results[0].formatted_address);
            }
            });        
        });

      }).catch((error) => {
        console.log('Error getting location', error);
    });

  });
  
}

public getLocationName(point){
  this.geocoder.geocode({
    'location': point
  }, 
  function(results, status){
    
    if (status === 'OK') {
      if (results[0]) {
        console.log(results[0].formatted_address);
        var addr = <HTMLInputElement>document.getElementById("address")
        addr.value = results[0].formatted_address;

      } else {
        console.log('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  })  
}

public redirectDashboard(){
  this.navCtrl.push('DashboardPage');
}


}
