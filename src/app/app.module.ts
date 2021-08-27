import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NumbersComponent } from './numbers/numbers.component';
import { AboutComponent } from './about/about.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {path: '', component: HomeComponent},
        {path: 'numbers', component: NumbersComponent},
        {path: 'about', component: AboutComponent}
      ]
    )
  ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, HomeComponent, NumbersComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
