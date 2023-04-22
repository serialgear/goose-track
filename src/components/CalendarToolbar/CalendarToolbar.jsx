import { PeriodPaginator } from "./PeriodPaginator/PeriodPaginator"
import { PeriodTypeSelect } from "./PeriodTypeSelect/PeriodTypeSelect" 

export const CalendarToolbar = () => {
    return (
       <>
        <PeriodPaginator />
        <PeriodTypeSelect />
       </>
    )
}