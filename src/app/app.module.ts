import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

/*
* Component
*/
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotificationComponent } from './notification/notification.component';

/*
* Module
*/
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {  AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FirebaseService } from './service/firebase.service';
import { AuthService } from './service/auth.service';
import { GuardService } from './service/guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    LoginComponent,
    RegisterComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatButtonModule, MatCheckboxModule, MatInputModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [FirebaseService, AuthService, GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
