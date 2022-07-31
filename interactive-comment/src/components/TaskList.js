import React from 'react'

const taskList = ({tasks, toggle, ondelete}) => {
  return (
    <div className={`task-${tasks.remainder? 'remainder': 'container'}`} onDoubleClick={()=> toggle(tasks._id)} >
        <div className="task-delete">
            <h3>{tasks.text}</h3>
            <button onClick={()=> ondelete(tasks._id)}>Delete</button>
        </div>
      <h5>{tasks.time}</h5>
    </div>
  )
}

export default taskList
