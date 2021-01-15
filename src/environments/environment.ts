// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from "firebase";

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyBMm2hdFdgRKb0mnWzt63FYEhySwytz6eI",
    authDomain: "examente1.firebaseapp.com",
    projectId: "examente1",
    storageBucket: "examente1.appspot.com",
    messagingSenderId: "1026953063035",
    appId: "1:1026953063035:web:961d6887b1fa68303610de"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
