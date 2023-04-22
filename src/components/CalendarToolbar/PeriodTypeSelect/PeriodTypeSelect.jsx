import { Wrapper, ButtonDay, ButtonMonth } from "./PeriodTypeSelect.styled"

export const PeriodTypeSelect = () => {
    return (
        <Wrapper>
   <ButtonMonth type="button">Month</ButtonMonth>
    <ButtonDay type="button">Day</ButtonDay>
   </Wrapper>
    )
}