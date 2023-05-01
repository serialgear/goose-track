import { Modal } from '../Modal/Modal';
import { TASK_STATUS } from '../../constants/taskStatus.constants';
import icons from 'images/sprite.svg';
import * as STC from './TaskStatusModal.styled';
import { useDispatch } from 'react-redux';
import { editTaskOperation } from '../../redux/calendar/calendar.operations';

export const TaskStatusModal = ({ handleCloseStatusModal, ...props }) => {
  const dispatch = useDispatch();

  const currentStatus = props.status;
  const filteredStatuses = TASK_STATUS.filter(
    status => status.name !== currentStatus
  );

  const handleStatusClick = status => {
    const payload = { ...props, status };
    dispatch(editTaskOperation(payload));
  };

  return (
    <>
      <Modal onClose={handleCloseStatusModal}>
        <STC.Ul>
          {filteredStatuses.map(status => (
            <li key={status.id}>
              {console.log('STATUS in MAP===', status.name)}
              <STC.Button
                type="button"
                onClick={() => handleStatusClick(status.name)}
              >
                {status.name}
                <STC.Svg>
                  <use xlinkHref={`${icons}#task-move-sf`}></use>
                </STC.Svg>
              </STC.Button>
            </li>
          ))}
        </STC.Ul>
      </Modal>
    </>
  );
};
