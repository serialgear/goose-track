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
import {
  selectCurrentMonth,
  selectTasks,
} from 'redux/calendar/calendar.selectors';
import { useParams } from 'react-router-dom';
import { CalendarTableItem } from './CalendarTableItem';

export const CalendarTable = () => {
  const currentMonth = parseISO(useSelector(selectCurrentMonth));
  const firsDayOfMonth = useParams()
  const tasksOfMonth = useSelector(selectTasks)
  
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
              {isSameMonth(day, currentMonth) && (
                  <>
                    <AllDays>{format(day, 'd')}</AllDays>
                    <CalendarTableItem
                      dayTasks={tasksOfMonth[Number(format(day, 'd'))]}
                    />
                  </>
                )}
              </Wrapper>
            </StyledLink>
          </Days>
        );
      })}
    </Calendar>
  );
};
