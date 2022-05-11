import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyLibService {
  constructor() {
    console.log('constructed');
  }

  test(): void {
    console.log('test');
  }
}
