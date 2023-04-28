import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { Container } from './CalendarPage.styled';
import { Outlet } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentMonth } from 'redux/calendar/calendar.selectors';
import { getTasksOfMonth } from 'redux/calendar/calendar.operations';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import { refreshUser } from 'redux/auth/auth.operations';

export default function CalendarPage() {
  const dispatch = useDispatch();
  const currentDate = useSelector(selectCurrentMonth);

  useEffect(() => {
    try {
      dispatch(refreshUser());
    } catch (error) {
      toast.error('Authorization error');
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getTasksOfMonth({
        month: format(new Date(currentDate), 'M') - 1,
        year: Number(format(new Date(currentDate), 'yyyy')),
      })
    );
  }, [currentDate, dispatch]);

  return (
    <Container>
      <CalendarToolbar />
      <Outlet />
    </Container>
  );
}
