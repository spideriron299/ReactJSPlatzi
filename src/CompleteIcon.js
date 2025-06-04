import React from "react";
import { TodoIcon } from './TodoIcon';
function CompleteIcon( {completed, onDelete}) {
    return (
        <TodoIcon
            type = "check"
            color = {completed ? 'green': 'gray'}
            onClik={onDelete}
        />
    );
}

export { CompleteIcon };