import {
  startOfISOWeek,
  format,
  eachDayOfInterval,
  endOfISOWeek,
  isSameDay,
  formatISO,
} from 'date-fns';
import { ListMonth,  DateOfWeek, ChoosedDate, DayWeek, Days, Month, ListDays, StyledLink } from './CalendarHead.styled';



export const CalendarHead = ({ currentDay }) => {
  let daysInWeek;

  if (currentDay) {
    daysInWeek = eachDayOfInterval({
      start: startOfISOWeek(new Date(currentDay), { weekStartsOn: 1 }),
      end: endOfISOWeek(new Date(currentDay), { weekStartsOn: 1 }),
    });
  } else {
    daysInWeek = eachDayOfInterval({
      start: startOfISOWeek(new Date(), { weekStartsOn: 1 }),
      end: endOfISOWeek(new Date(), { weekStartsOn: 1 }),
    });
  }
  const List = currentDay ? ListDays : ListMonth
  return (
    <>
    
       <List>
      {daysInWeek?.map((day, idx) => {
        const Week = currentDay ? Days : Month
        const DateWeek = isSameDay(new Date(currentDay), new Date(day)) ? ChoosedDate : DateOfWeek
        const choosedDay = new Date(day).toISOString()
        return <Week key={idx}>
        <DayWeek>{format(day, 'EEEEE')}</DayWeek>
        
        {currentDay && <StyledLink to={`/calendar/day/${formatISO(new Date(choosedDay),
     { representation: 'date' })}`}>
          <DateWeek>{format(day, 'd')}</DateWeek>
          </StyledLink>}
      </Week>
      } 
      )}
    </List>
    </>
 
  );
};
