import {
  TaskToolbarButton,
  TaskToolbarList,
  ToolbarSvg,
} from './TaskToolbar.styled';
import icons from 'images/sprite.svg';

export const TaskToolbar = ({ _id: taskId = '123', status = 'To Do' }) => {
  // console.log('status ', status);
  // console.log('taskId ', taskId);
  // console.log('props ', props);
  return (
    <>
      <TaskToolbarList>
        <li>
          <TaskToolbarButton
            type="button"
            onClick={() => {
              console.log('move to');
            }}
          >
            <ToolbarSvg>
              <use xlinkHref={`${icons}#task-move-sf`}></use>
            </ToolbarSvg>
          </TaskToolbarButton>
        </li>
        <li>
          <TaskToolbarButton
            type="button"
            onClick={() => {
              console.log('edit', taskId);
            }}
          >
            <ToolbarSvg>
              <use xlinkHref={`${icons}#task-edit-sf`}></use>
            </ToolbarSvg>
          </TaskToolbarButton>
        </li>
        <li>
          <TaskToolbarButton
            type="button"
            onClick={() => {
              console.log('trash', taskId);
            }}
          >
            <ToolbarSvg>
              <use xlinkHref={`${icons}#task-trash-sf`}></use>
            </ToolbarSvg>
          </TaskToolbarButton>
        </li>
      </TaskToolbarList>
    </>
  );
};
