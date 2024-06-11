import { TaskContext } from "../context/TaskContext";
import React, {  useContext } from 'react'

import TaskCard from "./TaskCard"

function TaskList() {
    const {task} = useContext(TaskContext)

    if (task.length === 0) {
        return <h1 className="text-3xl font-bold text-white mb-3 text-center">No hay tareas</h1>
    }
    return (
        <div className="grid grid-cols-4 gap-2">
            {task.map((tasks) => (
                <TaskCard  tasks={tasks} key={tasks.id} />
            ))}
        </div>
    );
}

export default TaskList
