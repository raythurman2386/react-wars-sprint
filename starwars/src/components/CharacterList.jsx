import React from 'react'
import styled from 'styled-components'

// Component
import Character from './Character'

const CharacterList = ({ list }) => {
  return (
    <StyledDiv>
      {list.map((char, index) => (
        <Character key={index} data={char} />
      ))}
    </StyledDiv>
  )
}

export default CharacterList

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  max-width: 1120px;
  margin: auto;
`
