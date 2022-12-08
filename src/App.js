

import './sss.css'
import{useState} from 'react'
function App() {
  
const[state,setCount]=useState('')
const[states,setCount2]=useState([])
        
  return (
    
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={state} onChange={(e)=>setCount(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>setCount2([...states,{id:Date.now(),text: state,status:false}])} className="fas fa-plus"></i>
    </div>
    
    
    <div className="todos">
    {states.map((obj)=>{
      return (
      <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            console.log(e.target.checked);
            console.log(obj);
            setCount2(states.filter(obj2=>{
              if(obj2.id==obj.id){
                obj2.status=e.target.checked
              }
              return obj2
            }))
          }} value={obj.status} type="checkbox" name="" id="" />
          <p>{obj.text}</p>

        </div>
        <div className="right">
          <i className="fas fa-times"></i>
        </div>
      </div>);
      })
    }
    <h1>active takes</h1>
    {states.map((obj)=>{
      if(obj.status){
        return(<h2>{obj.text}</h2>);
    }
      return null
  })}
    </div>
   </div>

  
      
       
  );
}

export default App
