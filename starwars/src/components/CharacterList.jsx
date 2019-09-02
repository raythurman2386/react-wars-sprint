import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Component
import Character from './Character'

const CharacterList = () => {
  // state hook for the data
  const [data, setData] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // effect hook to grab the data
  useEffect(() => {
    axios
      // grab data from api
      .get(`https://swapi.co/api/people`)

      // do something with that data
      .then(res => setData(res.data.results))

      // do something with the error
      .catch(err => console.log(err.response))
    // sync the array to what data
  }, [])

  return (
    <StyledDiv>
      {data.map((char, index) => (
        <Link style={LinkStyle} to={`/details/${index + 1}`}>
          <Character key={index} data={char} />
        </Link>
      ))}
    </StyledDiv>
  )
}

export default CharacterList

const LinkStyle = {
  textDecoration: 'none',
}

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  max-width: 1120px;
  margin: auto;
`
