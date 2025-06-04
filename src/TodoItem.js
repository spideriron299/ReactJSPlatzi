import { CompleteIcon } from './CompleteIcon'
import { DeletedIcon } from './DeletedIcon'

import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed = {props.completed}
        onComplete = {props.onComplete}
      />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <DeletedIcon
        onDelete = {props.onDelete}
      />
    </li>
  );
}

export { TodoItem };