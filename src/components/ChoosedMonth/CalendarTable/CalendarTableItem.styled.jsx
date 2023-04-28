import styled from "styled-components";
import { TASK_PRIORITY } from 'constants/taskPriority.constants';

export const DaysOfMonth = styled.div`
position: absolute;
top: 8px;
right: 4px;
display: flex;
align-items: center;
justify-content: center;
width: 24px;
height: 24px;
padding: 4px 6px;

border-radius: 6px;
`;

export const Today = styled(DaysOfMonth)`

background-color: var(--accent-background-color);
color:  var(--primary-background-color);
`;
export const BoxTasks = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:2px;
`;

export const Task = styled.li`
display: flex;
align-items: center;
justify-content: center;
width: 40px;
height: 22px;
background: var(
    ${props => {
        if(props.priority === TASK_PRIORITY.medium) {
            return '--priority-medium-bg-сolor';
        }
        if(props.priority === TASK_PRIORITY.high) {
            return '--priority-high-bg-color'
        }
        return '--priority-low-bg-color'
    }}
);
border-radius: 8px;


`;

export const Title = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 10px;
line-height: 1.4;

color: var(
    ${props => {
        if(props.priority === TASK_PRIORITY.medium) {
            return '--task-priority-medium-color';
        }
        if(props.priority === TASK_PRIORITY.high) {
            return '--task-priority-high-color'
        }
        return '--task-priority-low-color'
    }}
);
`;
