import { Component, OnInit } from '@angular/core';
import { MyLibService } from 'my-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';

  constructor(private myLibService: MyLibService){
    
  }
  ngOnInit(): void {
    this.myLibService.test();
  }
}
