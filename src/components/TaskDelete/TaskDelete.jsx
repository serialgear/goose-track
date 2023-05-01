import { useDispatch } from 'react-redux';
import { Modal } from '../Modal/Modal';
import { deleteTaskOperation } from 'redux/calendar/calendar.operations';
import { Thumb } from './TaskDelete.styled';



export const TaskDelete = ({handleCloseDeleteModal, id }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTaskOperation(id));
      };
  return (
    <>
      <Modal 
      onClose={handleCloseDeleteModal}
      >
        <p> Do you really want to delete your task?</p>
        <Thumb><button type='button' onClick={handleDelete}>Yes</button>
        <button type='button' onClick={()=>handleCloseDeleteModal()}>Cancel</button></Thumb>
        
      </Modal>
    </>
  );
};
