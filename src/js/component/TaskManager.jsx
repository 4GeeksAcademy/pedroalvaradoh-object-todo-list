import React, { useState } from "react";





// Componente de To-do List
const TaskManager = () => {

    const [titleInputValue, setTitleInputValue] = useState("")
    const [descriptionInputValue, setDescriptionInputValue] = useState("")
    const [taskList, setTaskList] = useState([])

    const newTask = () => {
        if (!titleInputValue) return;

        const newTaskItem = {
            title: titleInputValue,
            description: descriptionInputValue.replace(/\n/g, "<br>"),
        };

        setTaskList((prev) => [...prev, newTaskItem]);
        setTitleInputValue("");
        setDescriptionInputValue("");
    };


    // Funciones de OnChange para poder escribir en los inputs
    const onChangeTitle = (e) => {
        setTitleInputValue(e.target.value)
    }

    const onChangeDescription = (e) => {
        setDescriptionInputValue(e.target.value)
    };

    // Delete Button
    const handleDelete = (mapIndex) => {
        setTaskList((prev) => taskList.filter((_, index) => index !== mapIndex))
    };

    // hacer submit al hacer enter
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && e.shiftKey) {
            setDescriptionInputValue((prevValue) => prevValue + "\n");
            e.preventDefault(); // Evita que se realice el salto de línea predeterminado
        } else if (e.key === "Enter") {
            e.preventDefault(); // Evita que se agregue una nueva línea en el textarea
            newTask();
        }
    };


    return <>
        <div className="general-wraper flex-column container">
            <header className="mb-5 d-flex justify-content-center"><h1>MiTask</h1><h5>REACT</h5></header>
            <div className="inputs-class">
                <input className="input-title mb-2" type="text" placeholder="Task Title" value={titleInputValue} onChange={onChangeTitle} onKeyDown={handleKeyDown} />
                <textarea className="input-description" placeholder="Describe your task (optional)" value={descriptionInputValue} onChange={onChangeDescription} onKeyDown={handleKeyDown}></textarea>
            </div>
            <button className="add-button" type="submit" onClick={newTask}>Add</button>
            {taskList.length > 0 &&
                <div className="list-body">
                    <ul className="general-list">
                        {taskList.map((task, index) => (
                            <li key={index}> <div className="d-flex justify-content-between align-items-center p-2"><h5 className="text-center taskList-class">- {task.title}</h5> <button className="delete-button" type="button" onClick={() => handleDelete(index)}>x</button></div> <div className="description-font" dangerouslySetInnerHTML={{ __html: task.description }}></div> </li>
                        ))}
                        <div className="task-counter"> {taskList.length === 0 ? "No Pending Tasks" : `${taskList.length} Pending Tasks`}</div>
                    </ul>

                </div>
            }
        </div>

    </>
};

export default TaskManager;