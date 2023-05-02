import { Button, AddTask, Plus } from './AddTaskBtn.styled';

export const AddTaskBtn = ({ status, handleShowModal }) => {
  return (
    <>
      <Button type="button" onClick={handleShowModal}>
        <Plus>+</Plus>
        <AddTask>Add task</AddTask>
      </Button>
    </>
  );
};
