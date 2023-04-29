import { CalendarHead } from 'components/CalendarHead/CalendarHead';
import { useParams } from 'react-router';

export const DayCalendarHead = () => {
 
  const day = useParams();
  const { currentDay } = day;

  // const indexCurrentDay = Number(format(new Date(currentDay), 'd'));
  // dispatch(addIndexCurrentDay(indexCurrentDay));

  return <CalendarHead currentDay={currentDay} />;
};
