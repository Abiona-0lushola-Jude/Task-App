import React from 'react'
import TaskList from './TaskList'

const Todo = ({tasks, toggle, ondelete}) => {
  return (
    <div>
        {tasks.map((task=> {
          return <TaskList key={task._id} 
          tasks={task} 
          toggle={toggle}
          ondelete={ondelete}
          />
          }))}
    </div>
  )
}

export default Todo
