import { useSelector } from "react-redux"
import { Wrapper } from "./CalendarToolbar.styled"
import { PeriodPaginator } from "./PeriodPaginator/PeriodPaginator"
import { PeriodTypeSelect } from "./PeriodTypeSelect/PeriodTypeSelect" 
import { selectChoosedDay } from "redux/calendar/calendar.selectors"



export const CalendarToolbar = () => {
    const choosedDay = useSelector(selectChoosedDay)
    return (
       <Wrapper>
        <PeriodPaginator choosedDay={choosedDay} />
        <PeriodTypeSelect />
       </Wrapper>
    )
}