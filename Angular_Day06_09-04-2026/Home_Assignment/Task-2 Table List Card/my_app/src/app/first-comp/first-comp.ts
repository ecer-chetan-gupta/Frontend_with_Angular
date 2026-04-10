import { Component } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  imports: [],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {
  view = 'list';

  users = [
    { name: 'Chetan', age: 22, city: 'Rawatbhata' },
    { name: 'Gourav', age: 21, city: 'Kota' },
    { name: 'Dollar', age: 24, city: 'Jaipur' }
  ];

  setType(type: string) {
    this.view = type;
  }
}
