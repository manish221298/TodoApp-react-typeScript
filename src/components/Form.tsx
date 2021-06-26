import React, { FC, ChangeEvent, useState } from "react";
import { ITask } from "./interface";
import TodoList from "./TodoList"


const Form: FC = () => {
    const [task, setTask] = useState<string>("");
    const [todoList, setTodoList] = useState<ITask[]>([]);
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setTask(e.target.value);
    };
  
    const addTask = (): void => {
      const newTask = { taskName: task };
      setTodoList([...todoList, newTask]);
      setTask("");
    };

    const deleteTask = (deleteTaskName: string): void => {
        setTodoList(
            todoList.filter((task) => {
                return task.taskName !== deleteTaskName
            })
        )
    }  

    return (
      <div className="App">
        <div className="header">
          <div className="inputContainer">
            <input
              type="text"
              placeholder="Enter your task"
              name="task"
              value={task}
              onChange={handleChange}
            />
          </div>
          <button onClick={addTask}>Add Task</button>
        </div>
        <div>
            <h2>List of Types</h2>
        {
            todoList.map((task : ITask) => {
                return <TodoList task={task} deleteTask={deleteTask} />
            })
        }
        </div>
      </div>
    );
  };
  
  export default Form;
  