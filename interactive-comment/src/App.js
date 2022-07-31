import React, { useEffect } from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import axios from 'axios'
import { set } from 'mongoose';
 
function App() {
  const [info, setInfo] = React.useState({
    text:"",
    time:"",
    date:Date.now(),
    remainder:false
  })

  const [todo, setTodo] = React.useState([])

  // Function for getting all the data
  function GetAllData(){
    React.useEffect(()=>{
        axios.get("/get")
          .then(res => setTodo(res.data))
    }, [])
  }
    
  // toggling the box for remainder
  function onToggle(id){
    setTodo(todo.map((task)=>
      task._id === id ? {...task, remainder: !task.remainder} : task
    ))

  }

  // function for new remainder
  function onRemainder(){
    setInfo(prev=>{
      return({
        ...prev,
        remainder: !prev.remainder
      })
    })
  }
  // function for submit
   function onSubmit(event){
      event.preventDefault()
      axios.post("/post", info)
      .then(res=> console.log(res))
      .catch(err=> console.log(err))
      window.location.reload()
  }

  // fonction for deleting list
  function onDelete(id){
    // setTodo(todo.filter((task)=> task.id !== id))
    axios.delete(`/delete/${id}`)
    .then(res=> console.log(res))
    .catch(err => console.log(err))
    window.location.reload()
  }

  GetAllData()

  return (
    <div>
    <Header 
    infoState={setInfo}
    submit={onSubmit}
    onRemainder={onRemainder}
    />
    {todo.length > 0 ? <Todo 
    tasks= {todo}
    toggle={onToggle}
    ondelete={onDelete}
    />: <h3 className='open'>Add New TASK...</h3>}
    </div>
  );
}

export default App;
