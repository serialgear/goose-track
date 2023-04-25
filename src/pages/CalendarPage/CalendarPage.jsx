import { CalendarToolbar } from "components/CalendarToolbar/CalendarToolbar";
import { Container } from "./CalendarPage.styled";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTasksOfMonth } from "redux/calendar/calendar.operations";


 export default function CalendarPage() {
 const dispatch = useDispatch();

  useEffect(()=> {
dispatch(getTasksOfMonth())
  }, [dispatch])
  
  return (
    <Container>
      <CalendarToolbar />
      <Outlet />
    </Container>
  );
}
