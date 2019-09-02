import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Character = props => {
  // console.log(props)

  return (
    <Link to='/details'>
      <StyledDiv>
        <h2>{props.data.name}</h2>
        <p>{props.data.birth_year}</p>
      </StyledDiv>
    </Link>
  )
}

export default Character

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 200px;
  margin: 0 auto 20px;
  border: 1px solid black;
  background-color: white;
  box-shadow: 0 0 25px black;

  :hover {
    box-shadow: 0 0 25px white;
    transform: scale(1.1);
  }
`
