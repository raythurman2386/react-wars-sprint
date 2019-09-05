import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Loader from 'react-loader'
import { Link } from 'react-router-dom'

// Component
import Character from './Character'

const CharacterList = () => {
  // state hook for the data
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // effect hook to grab the data
  useEffect(() => {
    axios
      // grab data from api
      .get(`https://swapi.co/api/people`)

      // do something with that data
      .then(res => {
        setLoading(false)
        setData(res.data.results)
      })

      // do something with the error
      .catch(err => console.log(err.response))
    // sync the array to what data
  }, [])

  if (loading) {
    return (
      <StyledDiv>
        <Loader
          loaded={false}
          lines={13}
          length={20}
          width={10}
          radius={30}
          corners={1}
          rotate={0}
          direction={1}
          color='#000'
          speed={1}
          trail={60}
          shadow={false}
          hwaccel={false}
          className='spinner'
          zIndex={2e9}
          top='50%'
          left='50%'
          scale={1.0}
          loadedClassName='loadedContent'
        />
      </StyledDiv>
    )
  }
  return (
    <StyledDiv>
      {data.map((char, index) => (
        <Link style={LinkStyle} to={`/${index + 1}`}>
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
