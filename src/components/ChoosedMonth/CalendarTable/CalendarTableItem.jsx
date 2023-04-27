export const CalendarTableItem = ({ dayTasks }) => {
  return (
    <>{dayTasks?.length > 0 && dayTasks.map(task => <p>{task.title}</p>)}</>
  );
};
