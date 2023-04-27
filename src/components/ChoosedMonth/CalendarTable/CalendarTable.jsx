import { useSelector } from 'react-redux';
import {
  Calendar,
  Days,
  Today,
  DaysOfMonth,
  OtherMonthStyledLink,
  Wrapper,
  CurrentMonthStyledLink,
} from './CalendarTable.styled';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  isToday,
  parseISO,
  eachDayOfInterval,
  formatISO,
  isThisMonth,
  isFirstDayOfMonth,
} from 'date-fns';
import { selectCurrentMonth, selectTasks } from 'redux/calendar/calendar.selectors';
import { useParams } from 'react-router-dom';

export const CalendarTable = () => {

  const currentMonth = parseISO(useSelector(selectCurrentMonth));
  const firsDayOfMonth = useParams()
  const tasksOfMonth = useSelector(selectTasks)
  
  const tasksOfDay = tasksOfMonth.flatMap((tasks) => {
    return tasks
  })  
  console.log(tasksOfDay)  //і це масив потрібних мені об'єктів
//=========================================================================

// let task
//  tasksOfMonth.forEach((tasks, idx) => {
  
//     if(tasks.length > 0) {
//       console.log(tasks)
//       task = tasks.map(({priority, title, createDay, createMonth, createYear}) => {
//         const date = formatISO(new Date(createYear, createMonth, createDay))
        
//     return { priority,
//       title,
//       idx,
//     date
//     }
//   })
//   console.log(task)
//     }
  
//   })

//==============================================================

// for(let i = 0; i < tasksOfMonth.length; i++ ) {
//     console.log(i, tasksOfMonth[i])
// }


  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(monthStart, { weekStartsOn: 1 }),
    end: endOfWeek(monthEnd, { weekStartsOn: 1 }),
  });



  return (
    <Calendar>
      {daysInMonth?.map((day, idx) => {
        
        const StyledLink = !isSameMonth(day, currentMonth)
          ? OtherMonthStyledLink
          : CurrentMonthStyledLink;
          
        const AllDays =  isThisMonth(new Date(firsDayOfMonth.currentDate)) ? 
        (isToday(day) ? Today : DaysOfMonth) :
        (isFirstDayOfMonth(new Date(day)) ? Today : DaysOfMonth)
       
        const choosedDay = new Date(day)

        return (
          <Days key={idx}>
            <StyledLink to={`/calendar/day/${formatISO(new Date(choosedDay),
              { representation: 'date' })}`}>
              <Wrapper>
                {isSameMonth(day, currentMonth) && <AllDays>{format(day, 'd')}</AllDays>}
              </Wrapper>
            </StyledLink>
          </Days>
        );
      })}
    </Calendar>
  );
};
