import { Component } from '@angular/core';
import { styles } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  style: {}
  title: string
  desc: string
  valueOf: boolean

  constructor(){
    this.title = 'whatever dude'
    this.desc = 'wtf'
    this.valueOf = true
    this.style = styles
  }

  showComponent(value: boolean){
    this.valueOf = value
  }

}
