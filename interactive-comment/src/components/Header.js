import React from "react"

const Header = ({infoState, submit, onRemainder}) => {
        function onChange(event){
            const {name,type,checked,value} = event.target
            infoState(prevData=>{
                return {
                    ...prevData,
                    [name]:type === "checkbox "? checked: value 
                }
            })
        }

  return (
    <div className="header-container">
        <div className="header">
           <h1>TASK APP</h1> 
        </div>
        <form>
            <label htmlFor="task">Enter Task To-do</label>
            <input type="text" 
            placeholder="Enter name of task" 
            id="task" 
            name="text"
            value={infoState.text}
            required
            onChange={onChange} 
            />
            <label htmlFor="date">Set Date to be completed</label>
            <input type="text" 
            name="time" 
            id="time"
            value={infoState.time}
            onChange={onChange}
            />
            <div className="checked">
                <label htmlFor="remainder">Remainder</label>
                <input type="checkbox" 
                name="remainder" 
                id="remainder"
                value={infoState.remainder}
                onChange={onRemainder}
                />
            </div>
            
            <button type="submit" onClick={submit}>Save Task</button>
        </form>
    </div>
  )
}

export default Header
