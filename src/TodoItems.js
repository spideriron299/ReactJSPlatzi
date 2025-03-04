import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      //Si props.completed es verdadera se activa el icon-check--active
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>
        V
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export { TodoItem };