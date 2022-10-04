import React from 'react'

const Header = ({title, addTodo, showForm}) => {
  return (
    <div className='header'>
        <h3>{title}</h3>

        <button className="btn btn-lg btn-success"  onClick={addTodo}>{showForm ? 'Close':'Add'}</button>
    </div>
  )
}

Header.defaultProps = {
    title: 'Todo List'
}

export default Header