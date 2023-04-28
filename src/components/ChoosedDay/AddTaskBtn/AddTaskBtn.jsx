import { Button, AddTask, Plus } from "./AddTaskBtn.styled"

export const AddTaskBtn = ({status}) => {
 console.log("status ", status);

    return(
        <Button type="button">
            <Plus>+</Plus><AddTask>Add task</AddTask>
        </Button>
    )
}