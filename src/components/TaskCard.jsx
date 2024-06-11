import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"


const TaskCard = ({tasks}) => {
    const {deleteTask}= useContext(TaskContext)

    return (
            <div className="bg-gray-800 text-white p-4 rounded-md">
            <h1 className="text-xl font-bold capitalize">{tasks.title}</h1>
            <p className="text-gray-500 text-sm">{tasks.description}</p>
            <button onClick={()=>deleteTask(tasks.id)} className="bg-red-500 px-2 rounded-md mt-4 hover:bg-red-400">Eliminar Tarea</button>
        </div>
       
       
    )
}

export default TaskCard