import './TodoItems.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
        <input type="image" src="/image/VPersona5.png" class="image-input" alt="Botón de aceptar" />
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <input type="image" src="/image/XPersona5.png" class="image-input" alt="Botón de imagen" />

    </li>
  );
}

export { TodoItem };