import React from 'react'

const Character = props => {
  console.log(props)
  return (
    <div>
      <h2>{props.data.name}</h2>
      <p>{props.data.birth_year}</p>
    </div>
  )
}

export default Character
