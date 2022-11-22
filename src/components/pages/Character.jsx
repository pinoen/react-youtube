import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Typography } from '@mui/material'
import Tarjeta from '../common/Tarjeta'
import { Link } from 'react-router-dom'

const Character = () => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // Modo tradicional con fetch:
    // fetch("https://rickandmortyapi.com/api/character")
    //   .then(res => res.json())
    //   .then(data => setCharacters(data.results))

    // Usando axios:
    axios.get("https://rickandmortyapi.com/api/character")
      .then(data => setCharacters(data.data.results))
  }, [])

  return (
    <>
      <Button style={{ margin: "15px" }} variant='outlined'><Link to={"/"}>HOME</Link></Button>
      <Typography variant='h5' color={"primary"} align="center" >Characters</Typography>
      <div style={{ display: 'flex', flexWrap: "wrap", gap: "30px", margin: "30px", padding: "70px", border: "1px solid black" }}>
        {characters.map(character => (
          <Tarjeta
            key={character.id}
            character={character}
          />
        ))}
      </div>


    </>

  )
}

export default Character