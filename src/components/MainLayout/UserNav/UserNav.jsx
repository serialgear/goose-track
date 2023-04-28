import PropTypes from 'prop-types';

import * as STC from './UserNav.styled';
import Icons from '../../../images/sprite.svg';
import { useSelector } from 'react-redux';
import { selectCurrentMonth } from 'redux/calendar/calendar.selectors';
import { formatISO } from 'date-fns';
import { useLocation } from 'react-router-dom';

export const UserNav = ({ closeMobalMenu }) => {
  const currentDate = useSelector(selectCurrentMonth);
  const inActive = useLocation().pathname.split('/')[1];

  const handleCloseMobalMenu = () => {
    closeMobalMenu(false);
  };

  return (
    <>
      <nav>
        <STC.Title>User Panel</STC.Title>
        <ul>
          <STC.Item>
            <STC.Link to="/account" onClick={handleCloseMobalMenu}>
              <STC.Icon>
                <use href={`${Icons}#profile-user-sf`} />
              </STC.Icon>
              <STC.Txt>My account</STC.Txt>
            </STC.Link>
          </STC.Item>
          <STC.Item>
            <STC.Link
              className={inActive === 'calendar' && 'active'}
              to={`/calendar/month/${formatISO(new Date(currentDate), {
                representation: 'date',
              })}`}
              onClick={handleCloseMobalMenu}
            >
              <STC.Icon>
                <use href={`${Icons}#profile-calendar-sf`} />
              </STC.Icon>
              <STC.Txt>Calendar</STC.Txt>
            </STC.Link>
          </STC.Item>
        </ul>
      </nav>
    </>
  );
};

UserNav.propTypes = {
  closeMobalMenu: PropTypes.func.isRequired,
};
