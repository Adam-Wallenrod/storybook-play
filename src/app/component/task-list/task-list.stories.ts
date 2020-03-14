import {moduleMetadata} from "@storybook/angular";
import {TaskListComponent} from "./task-list.component";
import {TaskComponent} from "../task/task.component";
import {CommonModule} from "@angular/common";
import {taskData} from "../task/task.stories";


export default {
  title     : 'Task List',
  decorators: [

    moduleMetadata( {

      declarations: [ TaskListComponent,
                      TaskComponent ],
      imports     : [ CommonModule ]
    } )

  ]
};


export const defaultTasksData = [
  {
    ...taskData,
    id   : 1,
    title: 'Task1'
  },
  {
    ...taskData,
    id   : 2,
    title: 'Task2'
  },
  {
    ...taskData,
    id   : 3,
    title: 'Task3'
  },
  {
    ...taskData,
    id   : 4,
    title: 'Task4'
  },
  {
    ...taskData,
    id   : 5,
    title: 'Task5'
  },
  {
    ...taskData,
    id   : 6,
    title: 'Task6'
  }
];
