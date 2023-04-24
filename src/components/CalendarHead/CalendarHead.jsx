import {
  startOfISOWeek,
  format,
  eachDayOfInterval,
  endOfISOWeek,
} from 'date-fns';
import { ListMonth,  DateWeek, DayWeek, Days, Month, ListDays } from './CalendarHead.styled';


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
        return <Week key={idx}>
        {!currentDay && <DayWeek>{format(day, 'EEEEE')}</DayWeek>}
        {currentDay && <DayWeek>{format(day, 'EEEEE')}</DayWeek>}
        {currentDay && <DateWeek>{format(day, 'd')}</DateWeek>}
      </Week>
      } 
      )}
    </List>
    </>
 
  );
};
