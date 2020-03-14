import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {ITask} from "../task/task.component";


@Component({
  selector: 'app-task-list',
  template: `
  <div class="list-items">
    
    <div *ngIf="loading">loading</div>
    <div *ngIf="!loading && tasks.length === 0">empty</div>
    
    <div>
      <app-task *ngFor="let task of tasks"
        [task]="task" 
                (onArchiveTask)="" 
                (onPinTask)="" 
      >
      </app-task>
    </div>
    
  </div>
  
  
  `
})
export class TaskListComponent implements OnInit {

  @Input() tasks: ITask[] = [];
  @Input() loading = false;

  @Output() onPinTask: EventEmitter<boolean> = new EventEmitter();
  @Output() onArchiveTask: EventEmitter<boolean> = new EventEmitter();

  constructor() {

  }


  ngOnInit() {

  }

}
