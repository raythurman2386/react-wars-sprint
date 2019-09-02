import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CharacterDetails = ({ match }) => {
  // state hook for the data
  const [character, setCharacter] = useState({})
  // const [films, setFilms] = useState([])

  // effect hook to grab the data
  useEffect(() => {
    axios
      // grab data from api
      .get(`https://swapi.co/api/people/${match.params.id}`)

      // do something with that data
      .then(res => setCharacter(res.data))

      // do something with the error
      .catch(err => console.log(err.response))
    // sync the array to what data
  }, [])

  return (
    <Wrapper>
      <h1>Name: {character.name}</h1>
      <p>Eyes: {character.eye_color}</p>
      <p>Birth Year: {character.birth_year}</p>
      <p>Hair: {character.hair_color}</p>
      <p>Mass: {character.mass}</p>
      <p>Height: {character.height}</p>
    </Wrapper>
  )
}

export default CharacterDetails

const Wrapper = styled.div`
  color: white;
  border: 1px solid black;
  background: #333;
  max-width: 800px;
  width: 98%;
  margin: auto;
  box-shadow: 0 0 40px white;
  height: 60vh;
`
