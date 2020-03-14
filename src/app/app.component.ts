import {Component} from '@angular/core';
import {ITask} from './component/task/task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  myTask: ITask = {
    title: 'My first task'
  };


}
