import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  spiceChosen: string;
  foodChosen: string;
  goodResult = false;
  isLogin = false;
  isChosen = false;
  isClear = true;

  clearChosen() {
    this.isChosen = false;
    this.isClear = true;
  }

  isResultGood() {
    this.isChosen = true;
    this.isClear = false;
    if (this.foodChosen === 'lobster' || (this.foodChosen === 'crab' && (this.spiceChosen === 'scallion' || this.spiceChosen === 'XO'))) {
      this.goodResult = true;
    }
    else {
      this.goodResult = false;
    }

    return this.goodResult;
  }
}
