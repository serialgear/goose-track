import {
  TaskToolbarButton,
  TaskToolbarList,
  ToolbarSvg,
} from './TaskToolbar.styled';
import icons from 'images/sprite.svg';

export const TaskToolbar = props => {
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
              console.log('edit', props._id);
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
              console.log('trash', props._id);
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
