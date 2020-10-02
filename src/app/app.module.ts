import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FirebaseService } from './services/firebase.service';
import { HomeComponent } from './home/home.component';
import { AddSchoolComponent } from './add-school/add-school.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AddSchoolComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCJhNEczaTEWUF0yU40g6Ce_YT0nQg0FRU",
      authDomain: "sbn-school-directory.firebaseapp.com",
      databaseURL: "https://sbn-school-directory.firebaseio.com",
      projectId: "sbn-school-directory",
      storageBucket: "sbn-school-directory.appspot.com",
      messagingSenderId: "670128320766",
      appId: "1:670128320766:web:a374d9df8a656c0a69b5af",
      measurementId: "G-C3BTGGCVE6"
    }),
    AngularFireAuthModule,
    FormsModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
