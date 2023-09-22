import { useSelector, useDispatch } from 'react-redux';
// import { deleteTodo } from '../actions';
import { deleteTodo } from '../slices/todo/todoSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="taskList">
      <div className="display-tasks">
        <h3>Your tasks:</h3>
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                {task.text}
                <button className="delete-button" onClick={() => handleDelete(task.id)}>
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
