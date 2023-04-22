import { Wrapper } from "./CalendarToolbar.styled"
import { PeriodPaginator } from "./PeriodPaginator/PeriodPaginator"
import { PeriodTypeSelect } from "./PeriodTypeSelect/PeriodTypeSelect" 



export const CalendarToolbar = () => {
    return (
       <Wrapper>
        <PeriodPaginator />
        <PeriodTypeSelect />
       </Wrapper>
    )
}