import * as STC from './UserNav.styled';

import Icons from '../../../images/sprite.svg';
import { useSelector } from 'react-redux';
import { selectCurrentMonth } from 'redux/calendar/calendar.selectors';
import { formatISO } from 'date-fns';

export const UserNav = () => {
  const currentDate = useSelector(selectCurrentMonth)
  return (
    <>
      <nav>
        <STC.Title>User Panel</STC.Title>
        <STC.List>
          <STC.Item>
            <STC.Link to="/account">
              <STC.Icon>
                <use href={`${Icons}#profile-user-sf`} />
              </STC.Icon>
              <STC.Txt>My account</STC.Txt>
            </STC.Link>
          </STC.Item>
          <STC.Item>
            <STC.Link to={`/calendar/month/${formatISO(new Date(currentDate),
     { representation: 'date' })}`}>
              <STC.Icon>
                <use href={`${Icons}#profile-calendar-sf`} />
              </STC.Icon>
              <STC.Txt>Calendar</STC.Txt>
            </STC.Link>
          </STC.Item>
        </STC.List>
      </nav>
    </>
  );
};
