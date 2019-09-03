import { Component } from '@angular/core';

@Component({
  selector: 'app-dom-test',
  templateUrl: './dom-test.component.html',
  styleUrls: ['./dom-test.component.css']
})
export class DOMTestComponent {

  constructor() { }
  array: any[];
  arraySize: number;
  renderRows = false;

  startTest(): void {
    this.renderRows = !this.renderRows;
  }

  changeArray(): void {
    this.array = this.array.map(e => e + 1);
  }

  clearArray(): void {
    this.array = [];
  }

  randomArraySize(rows: number): void {
    let i = 0;
    this.array = Array.from({length: rows}, () => i++);
  }
}
