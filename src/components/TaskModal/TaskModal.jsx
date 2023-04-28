import { Modal } from '../Modal/Modal';
import { TaskForm } from '../TaskForm/TaskForm';
import { useState } from 'react';

export const TaskModal = ({ task, OnClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button onClick={toggleModal} />

      {!isModalOpen && (
        <Modal OnClose={OnClose}>
          <TaskForm task={task} OnClose={OnClose} />
        </Modal>
      )}
    </>
  );
};
