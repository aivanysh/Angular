import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user={
    name : 'John Dou'
  }
  public mycolor = 'red';

  public isShown = true;

  public users = [
    {name:'John'},
    {name:'Bob'},
    {name:'Alice'}
  ];

  constructor(){
  }
  changeColor(color){
    this.mycolor = color;
  }
}
 