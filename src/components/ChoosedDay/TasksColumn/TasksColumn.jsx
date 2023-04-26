import { AddTaskBtn } from "../AddTaskBtn/AddTaskBtn"
import { ColumnHeadBar } from "../ColumnHeadBar/ColumnHeadBar"
import { Container } from "./TasksColumn.styled"

export const TasksColumn = () => {
    return(
        <Container>
        <ColumnHeadBar />
        <AddTaskBtn/>
        </Container>
    )
}