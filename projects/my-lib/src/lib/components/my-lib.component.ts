import { Component, OnInit } from '@angular/core';
import { MyLibService } from '../services/my-lib.service';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      my-lib works!
    </p>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  constructor(private myLibService: MyLibService) { }

  ngOnInit(): void {
    this.myLibService.test();
  }

}
