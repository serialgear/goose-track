import { useSelector } from 'react-redux';
import { Calendar, DaysActive, Today, DaysOfMonth, OtherDays, StyledLink, Wrapper } from './CalendarTable.styled';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isToday,
  parseISO,
  eachDayOfInterval
} from 'date-fns';
import { selectCurrentMonth } from 'redux/calendar/calendar.selectors';



export const CalendarTable = () => {
  const currentMonth = parseISO(useSelector(selectCurrentMonth));

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
 
const daysInMonth = eachDayOfInterval({
  start:startOfWeek(monthStart, { weekStartsOn: 1 }),
  end:endOfWeek(monthEnd, { weekStartsOn: 1 }),
})
return (
  <Calendar>
      {daysInMonth?.map((day, idx) => {
        const AllDays = isToday(day) ? Today : DaysOfMonth
        const Days = !isSameMonth(day, currentMonth) ? OtherDays : DaysActive
        return <Days key={idx}>
          <StyledLink to={`/calendar/day/${day}`} >
          <Wrapper>
          <AllDays>{format(day,'d')}</AllDays>
          </Wrapper>
          </StyledLink>
        </Days>;
      })}
    </Calendar>
  );
};
