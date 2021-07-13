import React from 'react'
import {Todo} from './Todo'

export const Todos = (props) => {
    return (
        <div className = "container">
            <h3 className="text-center my-3">Todos List</h3>
            {/*this.props.todos*/}
            {props.todos.map((todo) => {
                return <Todo todo={todo} onDelete = {props.onDelete}/>
            })}
        </div>
    )
}
