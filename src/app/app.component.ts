import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SplashScreenPage } from '../pages/splash-screen/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = SplashScreenPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.overlaysWebView(true);
      statusBar.backgroundColorByHexString('#4e4940');
      statusBar.show();
      splashScreen.hide();

    });
  }
}
