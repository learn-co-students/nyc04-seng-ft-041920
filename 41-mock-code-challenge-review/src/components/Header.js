import React from 'react'

const Header = () => {
    return(
    <div className="todo-header">
        <div className="ui inverted vertical masthead center aligned segment todo-header">
            <h1>React ToDo List</h1>
            <div className="image">
                <img id="react-image" alt="React Logo" src="/logo192.png"/>
            </div>
        </div>
    </div>
    )
}

export default Header