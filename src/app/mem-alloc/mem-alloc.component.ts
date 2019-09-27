import { Component } from '@angular/core';

@Component({
  selector: 'app-mem-alloc',
  templateUrl: './mem-alloc.component.html',
  styleUrls: ['./mem-alloc.component.css']
})
export class MemAllocComponent {

  constructor() { }

  oldArray: any = [];
  newArray: any = [];
  arraySize: number;
  done = false;

  startTest(): void {
    this.newArray = this.oldArray;
    this.done = true;
  }
  clearArrays(): void {
    this.newArray = [];
    this.oldArray = [];
    this.done = false;
  }
  randomArray(size): void {
    let i = 0;
    this.oldArray = Array.from({length: size}, () => i++);
  }


}
