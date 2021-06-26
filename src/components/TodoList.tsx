import React from 'react';
import {ITask} from "./interface"

interface Props {
    task: ITask;
    deleteTask(deleteTaskName: string) : void;
}

const TodoList = ({task, deleteTask}: Props) => {
    return (
       
            <div className="task small-scroll">
            <div className="content">
            <span>{task.taskName}</span>
            </div>
            <button className=" btn btn-secondary pt-2"
                onClick = {() => {
                    deleteTask(task.taskName);
                }}
            >X</button>
        </div>
       
    );
}

export default TodoList;