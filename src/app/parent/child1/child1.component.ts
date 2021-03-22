import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  numbers: any;
  shuffleEventSubscription: Subscription;
  @Input() shuffle: Observable<any>;

  constructor() {
    // this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.numbers = [
      { count: 1, color: '#6F98A8' },
      { count: 2, color: '#2B8EAD' },
      { count: 3, color: '#333333' },
      { count: 4, color: '#2B8EAD' },
      { count: 5, color: '#333333' },
      { count: 6, color: '#BFBFBF' },
      { count: 7, color: '#BFBFBF' },
      { count: 8, color: '#6F98A8' },
      { count: 9, color: '#333333' }
    ]
  }

  ngOnInit() {
    this.getShuffled()

    this.shuffleEventSubscription = this.shuffle.subscribe(val => {
      if (val.type == 'shuffle' && val.count == 1) {
        this.getShuffled()
      } else if (val.type == 'sort') {
        this.getSorted()
      }
    });
  }

  getShuffled() {
    this.numbers.sort(() => .5 - Math.random());
  }

  getSorted() {
    this.numbers.sort((a, b) => a.count - b.count);
  }

  ngOnDestroy() {
    this.shuffleEventSubscription.unsubscribe();
  }
}
