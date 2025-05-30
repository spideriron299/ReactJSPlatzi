import React from "react";
import { TodoIcon } from './TodoIcon';

function DeletedIcon() {
    return (
        <TodoIcon
            type = "delete"
            color = "red"
        />
    );
}

export { DeletedIcon };