import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Our Story',
      url: '/story',
      icon: 'face'
    },
    {
      title: 'Calendar',
      url: '/calendar-location',
      icon: 'face'
    },
    {
      title: 'Greetings',
      url: '/greetings',
      icon: 'face'
    },
    {
      title: 'Groom & Bride',
      url: '/groom-bride',
      icon: 'face'
    },
    {
      title: 'Invitation',
      url: '/invitation',
      icon: 'face'
    },
    {
      title: 'Location',
      url: '/location',
      icon: 'face'
    },
    {
      title: 'Guests',
      url: '/people',
      icon: 'face'
    },
    {
      title: 'RSVP',
      url: '/rsvp',
      icon: 'face'
    },
    {
      title: 'User',
      url: '/user-profile',
      icon: 'face'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
