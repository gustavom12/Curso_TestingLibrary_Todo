import React from 'react'
import "./TodoFooter.css"
import { Link } from "react-router-dom"

function TodoFooter({
    numberOfIncompleteTasks
}) {
    return (
        <div className="todo-footer">
            <p>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "tarea falta por completar" : "tareas faltan por completar" } </p>
            <Link to="/followers">Followers</Link>
        </div>
    )
}

export default TodoFooter
