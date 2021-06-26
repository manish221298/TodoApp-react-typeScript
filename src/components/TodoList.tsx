import React from 'react';
import {ITask} from "./interface"

interface Props {
    task: ITask
}

const TodoList = ({task}: Props) => {
    return (
        <div>
            <span>{task.taskName}</span>
        </div>
    );
}

export default TodoList;