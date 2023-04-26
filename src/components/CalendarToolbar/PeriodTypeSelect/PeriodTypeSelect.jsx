import { useSelector } from "react-redux"
import { Wrapper, StyledLinkDay, StyledLinkMonth } from "./PeriodTypeSelect.styled"
import { selectCurrentMonth } from "redux/calendar/calendar.selectors"
import { formatISO, isThisMonth, startOfMonth } from "date-fns"



export const PeriodTypeSelect = () => {
    const currentDate =useSelector(selectCurrentMonth)
  
    
    return (
        <Wrapper>
   {isThisMonth(new Date(currentDate)) ?

(<StyledLinkMonth to={`month/${formatISO(new Date(currentDate),
 { representation: 'date' })}`}>Month</StyledLinkMonth>) : 
 
 (<StyledLinkMonth to={`month/${formatISO(startOfMonth(new Date(currentDate)),
    { representation: 'date' })}`}>Month</StyledLinkMonth>)}

   {isThisMonth(new Date(currentDate)) ?

    (<StyledLinkDay to={`day/${formatISO(new Date(currentDate),
     { representation: 'date' })}`}>Day</StyledLinkDay>) : 

     (<StyledLinkDay to={`day/${formatISO(startOfMonth(new Date(currentDate)),
        { representation: 'date' })}`}>Day</StyledLinkDay>)}
   </Wrapper>
    )
}