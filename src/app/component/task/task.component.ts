import {
  Component,
  EventEmitter, HostListener,
  Input,
  OnInit,
  Output
} from '@angular/core';


export enum TaskState {
  Task_INBOX,
  Task_ARCHIVED,
  Task_PINNED
}



export interface ITask {
  id?: number;
  title?: string;
  state?: TaskState;
  createdAt?: Date;
}


@Component( {
  selector : 'app-task',
  template : `
    <div class="list-item">
      <input id="checkbox" type="checkbox" [checked]="task.state==taskState.Task_ARCHIVED">
      <label for="checkbox">{{task.title}}</label>
      <span
        (click)="onStarClick()" class="black-star" [ngClass]="{'pinned': task.state==taskState.Task_PINNED}">★</span>
    </div>
    <div>
      {{task.state}}
    </div>
  `,
  styleUrls: [ './task.component.css' ]
} )
export class TaskComponent implements OnInit {



  title: string;
  taskState = TaskState;

  @Input() task: ITask;

  @Output() onPinTask: EventEmitter<any>     = new EventEmitter();
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();

  @HostListener('change', ['$event.target'])
  onChange(checkbox) {
    console.log('checkbox: ', checkbox.checked);

    this.task.state !== TaskState.Task_ARCHIVED ? this.task.state = TaskState.Task_ARCHIVED : this.task.state = TaskState.Task_INBOX;
    if (checkbox.checked) {
      this.onArchiveTask.emit( true );
    }
  }


  constructor () {
  }



  ngOnInit (): void {
  }




  onStarClick () {
    this.task.state !== TaskState.Task_PINNED ? this.task.state = TaskState.Task_PINNED : this.task.state = TaskState.Task_INBOX;

    if (this.task.state === TaskState.Task_PINNED) {
      this.onPinTask.emit( true );
    }
  }


}
