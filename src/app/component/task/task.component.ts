import {
  Component,
  EventEmitter,
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


@Component({
  selector: 'app-task',
  template: `
    <div class="list-item">
      <input type="text" [value]="task.title" readonly="true"/>
    </div>
  `,
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {


  title: string;

  @Input() task: ITask;

  @Output() onPinTask: EventEmitter<any> = new EventEmitter();
  @Output() onArchiveTask: EventEmitter<any> = new EventEmitter();


  constructor() {
  }

  ngOnInit(): void {
  }

}
