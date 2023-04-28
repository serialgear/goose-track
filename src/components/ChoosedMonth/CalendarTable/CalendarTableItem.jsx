import { format, isFirstDayOfMonth, isThisMonth, isToday } from 'date-fns';
import { useParams } from 'react-router-dom';
import { DaysOfMonth, Today, BoxTasks, Title, Task } from './CalendarTableItem.styled';

export const CalendarTableItem = ({day, dayTasks }) => {
  const firsDayOfMonth = useParams()

  const AllDays =  isThisMonth(new Date(firsDayOfMonth.currentDate)) ? 
  (isToday(day) ? Today : DaysOfMonth) :
  (isFirstDayOfMonth(new Date(day)) ? Today : DaysOfMonth)
  return (
    <>
    <AllDays>{format(day, 'd')}</AllDays>
<BoxTasks>
{dayTasks?.length > 0 && dayTasks.map(task =>
       <Task key={task._id} priority={task.priority}>
        <Title priority={task.priority} ellipsizeMode='tail'>{task.title}</Title>
       </Task>
       )}
</BoxTasks>
       </>
  );
};
