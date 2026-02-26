import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideNativeDateAdapter } from '@angular/material/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideNativeDateAdapter(), provideFirebaseApp(() => initializeApp({ projectId: "simple-crm-3a4d2", appId: "1:1039173719781:web:413acc73963459f98aa60c", storageBucket: "simple-crm-3a4d2.firebasestorage.app", apiKey: "AIzaSyCmVvHar1gUKz7cplnvR4r_Sco2Qc6x9Jw", authDomain: "simple-crm-3a4d2.firebaseapp.com", messagingSenderId: "1039173719781" })), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())
  ]
};
