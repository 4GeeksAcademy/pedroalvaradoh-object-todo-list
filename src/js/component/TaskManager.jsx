import React, { useState } from "react";


// Componente de To-do List
const TaskManager = () => {

    const [titleInputValue, setTitleInputValue] = useState("")
    const [descriptionInputValue, setDescriptionInputValue] = useState("")
    const [taskList, setTaskList] = useState([])

    const newTask = () => {
        if (!titleInputValue && !descriptionInputValue) return;

        const newTaskItem = {
            title: titleInputValue,
            description: descriptionInputValue,
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
    }

    // Delete Button
    const handleDelete = (mapIndex) => {
        setTaskList((prev) => taskList.filter((_, index) => index !== mapIndex))
    }
    // hacer submit al hacer enter
    // const handleKeyDown = (e) => {
    //     if (e.keyCode === 13) {
    //         e.preventDefault(); // Evita que se agregue una nueva línea en el textarea
    //         newTask();
    //     }
    // };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && e.shiftKey) {
            setDescriptionInputValue((prevValue) => prevValue + "\n");
            e.preventDefault(); // Evita que se realice el salto de línea predeterminado
        }

        if (e.key === "Enter") {
            e.preventDefault(); // Evita que se agregue una nueva línea en el textarea
            newTask();
        }
    };


    return <>
        <div className="general-wraper flex-column container ">
            <div className="inputs-class">
                <input className="input-title mb-2" type="text" placeholder="Task Title" value={titleInputValue} onChange={onChangeTitle} />
                <textarea className="input-description" placeholder="Describe your task (optional)" value={descriptionInputValue} onChange={onChangeDescription} onKeyDown={handleKeyDown} ></textarea>
            </div>
            <button className="add-button" type="submit" onClick={newTask}>Add</button>
            {taskList.length > 0 &&
                <div className="list-body">
                    <ul className="general-list">
                        {taskList.map((task, index) => (
                            <li key={index}> <div className="d-flex justify-content-between align-items-center"><h5 className="text-center">{task.title}</h5> <button className="delete-button" type="button" onClick={() => handleDelete(index)}>X</button></div> <div>{task.description}</div> </li>
                        ))}
                    </ul>
                </div>
            }
        </div>

    </>
};

export default TaskManager;