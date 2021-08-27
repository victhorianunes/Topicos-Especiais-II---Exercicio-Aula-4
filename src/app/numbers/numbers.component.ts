import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {
  n = 0;
  constructor() { }

  ngOnInit() {
  }

  getRanNumb (){
    let list: number[] = [];
    for (let i = 1; i <= this.n; i++) {
      list.push(Math.floor(Math.random() * 100))
    }
    return list;
  }

}