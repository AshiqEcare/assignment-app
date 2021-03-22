import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  shuffleCounter: number = 0;
  sortCounter: number = 0;
  shuffleEvent: Subject<any> = new Subject<any>();

  constructor() { }

  ngOnInit() {
    this.shuffleCounter = 2
  }

  shuffle() {
    this.shuffleCounter = this.shuffleCounter + 1
    let eventObject = {
      type: 'shuffle',
      count: this.shuffleCounter,
    }
    this.shuffleEvent.next(eventObject)
    if (this.shuffleCounter == 2) {
      this.sortCounter = 0
    }

  }

  sort() {
    this.sortCounter = this.sortCounter + 1
    let eventObject = {
      type: 'sort',
      count: this.sortCounter,
    }
    this.shuffleEvent.next(eventObject)

    if (this.sortCounter == 2) {
      this.shuffleCounter = 0
    }
  }

}
