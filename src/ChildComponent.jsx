import React, { useContext, useEffect, useRef,useState } from 'react'
import { ThemeContext } from './App';
import { useDispatch, useSelector } from 'react-redux';
import { updateCounter } from './features/counter/counterReducer';
import { type } from '@testing-library/user-event/dist/type';
function ChildComponent() {
    const {theme,setTheme} = useContext(ThemeContext);
    const [isOnline,setStatus] = useState(true);
    const inputRef = useRef();
    const {value} = useSelector(state=>state.counter);
    const dispatch = useDispatch();
    useEffect(()=>{
       window.addEventListener("online",()=>{
         setStatus(true);
       })
       window.addEventListener("offline",()=>{
         setStatus(false);
       })       
    },[])
  return (
    <div>
      <h2>Todo List</h2>
      <button>Add List</button>
      <div style={{display:'flex',rowGap:10}}>
      {Array.from({length:5}).map((_,idx)=>{
        return <p style={{color:'gold',fontSize:19,marginLeft:5}}>★</p>
      })}
      </div>
    </div>
  )
}

export default ChildComponent
