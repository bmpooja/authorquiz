import React from 'react'
import PropPractice from './PropPractice'

export default function PropOutsideComp ({handleClick}){
  return(
    <div>
      <button onClick = {(e)=>{
      handleClick('A')}} >A</button>
      <button onClick= {(e)=>
      handleClick('B')}>B</button>
      <button onClick={(e)=> 
      handleClick('C')}>C</button>
    </div>
  )
}
