import React from 'react'

export default function EventComponet(){

  function clickHandler(e)
  {
      console.log("I got clicked ") 
  }

    return(
    <div>
    <button onClick={clickHandler}>Make an event</button>
    <input type="checkbox" onClick={(e)=> e.preventDefault( )}></input>
    </div>
)

}
