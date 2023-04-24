import { CalendarToolbar } from "components/CalendarToolbar/CalendarToolbar";
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Container } from "./CalendarPage.styled";
import { Outlet } from "react-router";
import { parseISO } from "date-fns";
import { useSelector } from "react-redux";
import { selectCurrentMonth } from "redux/calendar/calendar.selectors";
import { selectUserName } from "redux/auth/auth.selectors";
import { replace } from "formik";

 export default function CalendarPage() {
  const currentDate = parseISO(useSelector(selectCurrentMonth));
  const user = useSelector(selectUserName)
   if(user) {
   <Navigate to={`month/${currentDate}`} replace/>
  }
  
  return (
    <Container>
      <CalendarToolbar />
      <Outlet />
    </Container>
  );
}
