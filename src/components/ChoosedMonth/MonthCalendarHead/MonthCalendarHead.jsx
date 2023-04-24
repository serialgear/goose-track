
import { startOfWeek, format, addDays } from 'date-fns';
import { List, Days } from "./MonthCalendarHead.styled"


export const MonthCalendarHead = () => {
    const weekStart = startOfWeek(new Date(),{weekStartsOn: 1})
    const days = [];
    for (let i = 0; i < 7; i++) {
        days.push(format(addDays(weekStart, i), 'EEEEE'))
    }
    return(
        <List>
            {days.map((day, idx) => (
   <Days key={idx}>{day}</Days>
             ) )}
        </List>
    )
}