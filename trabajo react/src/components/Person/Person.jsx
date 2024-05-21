import React from 'react'

const Person = (props) => {
  return (
   <span>{props.name} {props.surname} {props.age}</span>
  )
}

export default Person