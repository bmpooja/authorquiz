import React from 'react'

export default function  InnerHtmlComp (props)
{
  return(
    <div>
    <p> {props.dangerContainer}</p>
    <p dangerouslySetInnerHTML={{__html:props.dangerContainer}}/> 

    </div>
  )
}