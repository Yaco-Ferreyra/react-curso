import { createContext, useState,useEffect } from "react"
import { task as data } from "../data/task";


export const TaskContext = createContext()



export function TaskContextProvider(props) {
    const [task, setTask] = useState([])

    function createTask(tasks) {
        setTask([...task, {
            id: task.length,
            title: tasks.title,
            description: tasks.description
        }])
    }

    function deleteTask(taskId) {
        setTask(task.filter(task => task.id !== taskId))
    }

    useEffect(() => {
        setTask(data)
    }, [])

    return (

        <TaskContext.Provider value={{
            task: task,
            deleteTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>


    )
}

