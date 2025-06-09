import React from "react";
import { TodoIcon } from './index';

function DeletedIcon( { onDelete }) {
    return (
        <TodoIcon
            type = "delete"
            color = "gray"
            onClik={onDelete}
        />
    );
}

export { DeletedIcon };