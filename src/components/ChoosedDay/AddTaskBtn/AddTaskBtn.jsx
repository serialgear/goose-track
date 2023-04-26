import { Button, AddTask, Plus } from "./AddTaskBtn.styled"

export const AddTaskBtn = () => {
    return(
        <Button type="button">
            <Plus>+</Plus> <AddTask>Add task</AddTask>
        </Button>
    )
}