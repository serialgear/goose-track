import { CalendarToolbar } from "components/CalendarToolbar/CalendarToolbar";
import { Container } from "./CalendarPage.styled";
import { Outlet } from "react-router";
import { TaskColumnCard } from "components/ChoosedDay/TaskColumnCard/TaskColumnCard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTasksOfMonth } from "redux/calendar/calendar.operations";


 export default function CalendarPage() {
 const dispatch = useDispatch();

  useEffect(()=> {

  }, [dispatch])
  
  return (
    <Container>
      <CalendarToolbar />
      <Outlet />
      <TaskColumnCard/>
    </Container>
  );
}
