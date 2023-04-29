import { useDispatch, useSelector } from "react-redux"
import { Wrapper, StyledLinkDay, StyledLinkMonth } from "./PeriodTypeSelect.styled"
import { selectCurrentMonth } from "redux/calendar/calendar.selectors"
import { formatISO, isThisMonth, startOfMonth } from "date-fns"
import { addChoosedDay } from "redux/calendar/calendar.slice"



export const PeriodTypeSelect = () => {
    const dispath = useDispatch()
    const currentDate =useSelector(selectCurrentMonth)
  
    
    return (
        <Wrapper>
   {isThisMonth(new Date(currentDate)) ?

(<StyledLinkMonth to={`month/${formatISO(new Date(currentDate),
 { representation: 'date' })}`} onClick={() => 
    dispath(addChoosedDay(null))}>Month</StyledLinkMonth>) : 
 
 (<StyledLinkMonth to={`month/${formatISO(startOfMonth(new Date(currentDate)),
    { representation: 'date' })}`}  onClick={() => 
    dispath(addChoosedDay(null))}>Month</StyledLinkMonth>)}

   {isThisMonth(new Date(currentDate)) ?

    (<StyledLinkDay to={`day/${formatISO(new Date(currentDate),
     { representation: 'date' })}`} onClick={() => dispath(addChoosedDay(formatISO(new Date(currentDate),
        { representation: 'date' })))}>Day</StyledLinkDay>) : 

     (<StyledLinkDay to={`day/${formatISO(startOfMonth(new Date(currentDate)),
        { representation: 'date' })}`} onClick={() =>
             dispath(addChoosedDay(formatISO(startOfMonth(new Date(currentDate)),
             { representation: 'date' })))}>Day</StyledLinkDay>)}
   </Wrapper>
    )
}