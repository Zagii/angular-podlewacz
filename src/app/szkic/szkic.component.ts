import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray,copyArrayItem,transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-szkic',
  templateUrl: './szkic.component.html',
  styleUrls: ['./szkic.component.css']
})
export class SzkicComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
 narzedzia = [
    'Start',
    'podlej',
    'czekaj',
    'nie lej',
    'stop'
  ];

  sekwencja = [
  
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
    /*  transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      */  copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,event.currentIndex);
    
    }
  }
}