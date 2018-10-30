import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*一定要添加使得ngModel能用*/
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*一定要添加使得ngModel能用*/
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
