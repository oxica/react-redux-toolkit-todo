import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoComplite } from 'store/todoSlice';

const TodoItem = ({ id, text, complited }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={complited}
        key={id}
        onChange={() => dispatch(toggleTodoComplite({ id }))}
      />
      <span className="todo">{text}</span>
      <span className="btn" onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
