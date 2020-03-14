import {ITask, TaskComponent, TaskState} from './task.component';
import {action} from '@storybook/addon-actions';


export default {
  title: 'Task',
  excludeStories: /.*Data$/,
};


export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchivedTask: action('onArchivedTask')
};

export const taskData: ITask = {
  id: 1,
  title: 'Story Task',
  state: TaskState.Task_INBOX,
  createdAt: new Date(2019, 0, 1, 9, 0)
};


export const Default = () => ({
  component: TaskComponent,
  props: {
    task: taskData,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchivedTask
  }
});


export const Pinned = () => ({
  component: TaskComponent,
  props: {
    task: {...taskData, state: TaskState.Task_PINNED },
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchivedTask
  }
});


export const Archived = () => ({
  component: TaskComponent,
  props: {
    task: {...taskData, state: TaskState.Task_ARCHIVED },
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchivedTask
  }
});
