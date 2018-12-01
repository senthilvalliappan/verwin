import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url:any;
  constructor(){
  console.log(window.location.href ,'window URL');
  
  localStorage.setItem('url' ,window.location.href);
}
}
