import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebBTComponent } from './web-bt/web-bt.component';
import {WebBTModule} from './web-bt/web-bt.module';

@NgModule({
  declarations: [
    AppComponent,
    WebBTComponent
  ],
  imports: [
    BrowserModule,
    WebBTModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
