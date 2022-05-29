import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodos } from '../redux/reducer'

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => { dispatch(addTodos(obj)) }
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}

const Todos = (props) => {
    const [todo, setTodo] = useState("")

    // console.log('props', props)

    const handleChange = (e) => {
        setTodo(e.target.value)
    }

    const add = () => {
        if (todo === "") {
            alert("input is empty")
        } else {
            props.addTodo({
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false
            })
        }
        setTodo("")
    }

    return (
        <div className="addTodos">
            <input
                type="text"
                onChange={(e) => handleChange(e)}
                className="todo-input"
                value={todo}
            />

            <button className="add-btn" onClick={add}>
                Add
            </button>
            <ul>{props.todos.length > 0 && (
                props.todos.map((item) => {
                    return <li key={item.id}>{item.item}</li>
                })
            )}</ul>
            <br />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)