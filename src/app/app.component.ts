import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    /*title = 'Fullstack';
    counter = 0;*/
    spices: string[] = ['蒜蓉', '椒盐', '姜葱'];
    food: string[] = ['龙虾', '生蚝', '牛肉'];
    goodResult = false;
    isLogin = false;
    userName: string;
    /*counterPlus() {
        this.counter ++;
    }

    resetCounter() {
        this.counter = 0;
    }*/

    isResultGood() {
        this.goodResult = true;
        /*return this.goodResult;*/
    }

    login() {
        this.isLogin = true;
    }

    signOut() {
        this.isLogin = false;
    }

    // Event Binding
    /*onUpdateUserName(event: Event) {
        this.userName = (<HTMLInputElement>event.target).value;
    }*/

}
