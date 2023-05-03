import { useState } from 'react';
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';
import { ColumnHeadBar } from './ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from './ColumnsTasksList/ColumnsTasksList';
import { Container } from './TasksColumn.styled';
import { TaskModal } from '../../TaskModal/TaskModal';

export const TasksColumn = ({ status }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Container>
        <ColumnHeadBar title={status.name} handleShowModal={handleShowModal} />
        <ColumnsTasksList status={status} />
        <AddTaskBtn handleShowModal={handleShowModal} />
      </Container>
      {showModal && (
        <TaskModal handleCloseModal={handleCloseModal} status={status.name} />
      )}
    </>
  );
};
