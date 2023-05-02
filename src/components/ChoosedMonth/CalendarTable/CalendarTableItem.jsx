import { format, isSameDay, isThisMonth, isToday } from 'date-fns';
import { useParams } from 'react-router-dom';
import {
  DaysOfMonth,
  Today,
  BoxTasks,
  Title,
  Task,
  MoreTasks,
} from './CalendarTableItem.styled';
import { useMedia } from 'react-use';
import PropTypes from 'prop-types';

export const CalendarTableItem = ({ day, dayTasks }) => {
  const DayOfMonth = useParams();
  const isWide = useMedia('(min-width: 768px) and (max-width: 1279.98px)');
  const isWideSmaller = useMedia('(max-width: 374.98px)');

  const AllDays = isThisMonth(new Date(DayOfMonth.currentDate))
    ? isToday(day)
      ? Today
      : DaysOfMonth
    : isSameDay(new Date(DayOfMonth.currentDate), new Date(day))
    ? Today
    : DaysOfMonth;
  return (
    <>
      <AllDays>{format(day, 'd')}</AllDays>
      <BoxTasks length={dayTasks?.length}>
        {isWide
          ? dayTasks?.length > 0 && dayTasks?.length <= 4
            ? dayTasks?.map(task => {
                return (
                  <Task key={task._id} priority={task.priority}>
                    <Title priority={task.priority}>{task.title}</Title>
                  </Task>
                );
              })
            : dayTasks?.map((task, idx) => {
                if (idx < 3) {
                  return (
                    <Task key={task._id} priority={task.priority}>
                      <Title priority={task.priority}>{task.title}</Title>
                    </Task>
                  );
                }
                return false;
              })
          : dayTasks?.length > 0 && dayTasks?.length <= 3
          ? dayTasks?.map(task => {
              return (
                <Task key={task._id} priority={task.priority}>
                  <Title priority={task.priority}>{task.title}</Title>
                </Task>
              );
            })
          : dayTasks?.map((task, idx) => {
              if (idx < 2) {
                return (
                  <Task key={task._id} priority={task.priority}>
                    <Title priority={task.priority}>{task.title}</Title>
                  </Task>
                );
              }
              return false;
            })}

        {dayTasks?.length > 4 && isWide && (
          <MoreTasks>+ {dayTasks?.length - 3} More</MoreTasks>
        )}
        {dayTasks?.length > 3 && isWideSmaller ? (
          <MoreTasks>+ {dayTasks?.length - 2}</MoreTasks>
        ) : (
          dayTasks?.length > 3 &&
          !isWide && <MoreTasks>+ {dayTasks?.length - 2} More</MoreTasks>
        )}
      </BoxTasks>
    </>
  );
};
CalendarTableItem.propTypes = {
  day: PropTypes.object.isRequired,
  dayTasks:
    PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        createDay: PropTypes.number.isRequired,
        createMonth: PropTypes.number.isRequired,
        createYear: PropTypes.number.isRequired,
        end: PropTypes.string,
        owner: PropTypes.string.isRequired,
        priority: PropTypes.string.isRequired,
        start: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ) || undefined.isRequired,
};
