import React from 'react';
import {ITask} from "./interface"

interface Props {
    task: ITask;
    deleteTask(deleteTaskName: string) : void;
}

const TodoList = ({task, deleteTask}: Props) => {
    return (
        <div>
            <div className="text">
            <span className="cross text-right">{task.taskName}</span>
            <button className="cross text-right"
                onClick = {() => {
                    deleteTask(task.taskName);
                }}
            >X</button>
            </div>
            
        </div>
    );
}

export default TodoList;