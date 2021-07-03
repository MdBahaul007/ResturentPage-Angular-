import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestroComponent } from './add-restro/add-restro.component';
import { UpdateRestroComponent } from './update-restro/update-restro.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListRestroComponent } from './list-restro/list-restro.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AddRestroComponent,
    UpdateRestroComponent,
    LoginComponent,
    RegisterComponent,
    ListRestroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
