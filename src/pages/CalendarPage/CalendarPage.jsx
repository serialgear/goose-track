import { CalendarToolbar } from "components/CalendarToolbar/CalendarToolbar";
import { ChoosedMonth } from "components/ChoosedMonth/ChoosedMonth";

import { Container } from "./CalendarPage.styled";

 export default function CalendarPage() {
  return (
    <Container>
      <CalendarToolbar />
      <ChoosedMonth />
    </Container>
  );
}
