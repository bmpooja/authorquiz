import React from 'react'
export function ConditionaldisplayComp (props){
  return(
    <div>
      {props.isVisible ? props.children : null}
    </div>
  )
}
 export function Sum({a,b}){
  return(
    <div>
      <h1>{a}+{b} = {a+b}</h1>
    </div>
  )
}

