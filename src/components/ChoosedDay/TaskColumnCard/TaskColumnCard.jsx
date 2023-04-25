import { Avatar } from "components/MainLayout/Avatar/Avatar"
import { Container, TaskAvatarWrapper, TaskTitle, Wrapper } from "./TaskColumnCard.styled"
// import { AvatarWrapper } from "components/MainLayout/Avatar/Avatar.styles"

export const TaskColumnCard = () =>{
    return <Container>
        <TaskTitle>Brainstorm ideas for new content or products</TaskTitle>
        <Wrapper>
            <TaskAvatarWrapper>

            <Avatar/>
</TaskAvatarWrapper>
            <div>TaskToolbar</div>
        </Wrapper>
    </Container>
}