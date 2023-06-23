import { useEffect, useState } from 'react'

function App () {
  const [characters, setCharacters] = useState([])
  const [gender, setGender] = useState('')
  const [status, setStatus] = useState('')

  const API = `https://rickandmortyapi.com/api/character/?gender=${gender}&status=${status}`

  const genders = ['female', 'male', 'genderless', 'unknown']
  const charactersStatus = ['alive', 'dead', 'unknown']

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
  }, [API])

  const handleFilterGender = (value) => {
    setGender(value)
  }

  const handleFilterStatus = (value) => {
    setStatus(value)
  }

  console.log(characters)

  return (
    <div>
      <h1>Query Params</h1>
      <select onChange={(e) => handleFilterGender(e.target.value)}>
        {genders.map((gender) => {
          return (
            <option key={gender} value={gender}>
              {gender}
            </option>
          )
        })}
      </select>
      <select onChange={(e) => handleFilterStatus(e.target.value)}>
        {charactersStatus.map((status) => {
          return (
            <option key={status} value={status}>
              {status}
            </option>
          )
        })}
      </select>
      <ul>
        {characters.map((character) => {
          return (
            <li key={character.id}>
              Name: {character.name} <span>Gender: {character.gender}</span>{' '}
              <span>Status: {character.status}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
