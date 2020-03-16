import React from 'react'
import { connect } from 'react-redux'
import './sidenav.css'

function ToDoList(props) {
    return (
        <div className="main">
            <h2>ToDo</h2>
            <b><hr /></b>
            <h2 className="text-center">Listing ToDo's- {props.todos.length}</h2>
            <div>
                <div className="container mb-5 " >
                    <div className="w-50 mx-auto" >
                        <ul className="list-group card" >
                            {props.todos.map(todo => {
                                return <li key={todo.id}
                                    className="list-group-item card">{todo.title}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps)(ToDoList)