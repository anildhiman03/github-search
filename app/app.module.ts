import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ProfileModule } from './components/profile/profile.module';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    ProfileModule 
  ],
  declarations: [ 
    AppComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
