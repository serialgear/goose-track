import { useSelector } from 'react-redux';
import { Calendar, Days } from './CalendarTable.styled';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isToday
} from 'date-fns';
import { selectCurrentMonth } from 'redux/calendar/calendar.selectors';

// const events = [
//   { date: subDays(new Date(), 5), name: 'Event in the past' },
//   { date: addDays(new Date(), 1), name: 'Foo' },
//   { date: addDays(new Date(), 1), name: 'Wow calendar' },
// ];

export const CalendarTable = () => {
  const currentMonth = useSelector(selectCurrentMonth);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const dayStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const dayEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  let date = dayStart;

  const days = [];
//  let today
  while (date <= dayEnd) {
    
    if (!isSameMonth(date, currentMonth)) {
      days.push(format(date, ' '));
    } else {
      days.push(format(date, 'd'));
    }

    date = addDays(date, 1);
    
    //  today = isToday(date)
    //  console.log(today)
    }

  return (
    <Calendar>

      {days.map((day, idx) => {
       
       return (<Days key={idx} >{day}</Days>)
       } )} 
      
     
    </Calendar>
  );
};
