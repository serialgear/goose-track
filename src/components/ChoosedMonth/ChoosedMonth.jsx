import { CalendarTable } from "./CalendarTable/CalendarTable"
import { MonthCalendarHead } from "./MonthCalendarHead/MonthCalendarHead"
import { Wrapper } from "./ChoosedMonth.styled"

export const ChoosedMonth = () => {
    return (
        <Wrapper>
        <MonthCalendarHead />
        <CalendarTable />
        </Wrapper>
    )
}