import { useSelector } from "react-redux"
import { Wrapper, StyledLinkDay, StyledLinkMonth } from "./PeriodTypeSelect.styled"
import { selectCurrentMonth } from "redux/calendar/calendar.selectors"
import{  parseISO} from 'date-fns'

export const PeriodTypeSelect = () => {
    const currentDate = parseISO(useSelector(selectCurrentMonth))
    
    return (
        <Wrapper>
   <StyledLinkMonth 
   to={`/calendar/month/${currentDate}`}
   >Month</StyledLinkMonth>
    <StyledLinkDay to={`/calendar/day/${currentDate}`}>Day</StyledLinkDay>
   </Wrapper>
    )
}