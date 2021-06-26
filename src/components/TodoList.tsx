import React from 'react';
import {ITask} from "./interface"

interface Props {
    task: ITask;
    deleteTask(deleteTaskName: string) : void;
}

const TodoList = ({task, deleteTask}: Props) => {
    return (
        <div>
            <div>
            <span>{task.taskName}</span>
            <button 
                onClick = {() => {
                    deleteTask(task.taskName);
                }}
            >X</button>
            </div>
            
        </div>
    );
}

export default TodoList;