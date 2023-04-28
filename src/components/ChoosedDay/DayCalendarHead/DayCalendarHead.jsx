import { CalendarHead } from 'components/CalendarHead/CalendarHead';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { addIndexCurrentDay } from 'redux/calendar/calendar.slice';

export const DayCalendarHead = () => {
  const dispatch = useDispatch();
  const day = useParams();
  const { currentDay } = day;

  const indexCurrentDay = Number(format(new Date(currentDay), 'd'));
  dispatch(addIndexCurrentDay(indexCurrentDay));

  return <CalendarHead currentDay={currentDay} />;
};
