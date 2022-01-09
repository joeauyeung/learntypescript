import React, { useRef } from "react"

const NewTodo: React.FC = () => {
    const textInputRef = useRef<HTMLInputElement>()

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault()

    }

    return <form>
        <div>
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={textInputRef}/>
        </div>
        <button type="submit">TODO</button>
    </form>
}

export default NewTodo