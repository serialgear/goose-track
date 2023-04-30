import {
  TaskToolbarButton,
  TaskToolbarList,
  ToolbarSvg,
} from './TaskToolbar.styled';
import icons from 'images/sprite.svg';
import { useState } from 'react';
import { TaskModal } from '../../TaskModal/TaskModal';

export const TaskToolbar = props => {
  console.log('props ', props);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
          <TaskToolbarButton type="button" onClick={handleShowModal}>
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

      {showModal && (
        <TaskModal
          editMode={true}
          handleCloseModal={handleCloseModal}
          {...props}
        />
      )}
    </>
  );
};
