import React from 'react'

// Component
import Character from './Character'

const CharacterList = ({ list }) => {
  return (
    <div>
      {list.map((char, index) => (
        <Character key={index} data={char} />
      ))}
    </div>
  )
}

export default CharacterList
