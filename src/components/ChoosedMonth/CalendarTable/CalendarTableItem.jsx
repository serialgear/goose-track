export const CalendarTableItem = ({ dayTasks }) => {
  return (
    <>{dayTasks?.length > 0 && dayTasks.map(task => <p key={task._id}>{task.title}</p>)}</>
  );
};
