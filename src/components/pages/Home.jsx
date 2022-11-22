import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Typography style={{ margin: "15px" }} variant='h3' color={"primary"}>HOME</Typography>
      <Button style={{ margin: "15px" }} variant='outlined'><Link to={"/character"}>Ver Personajes</Link></Button>
    </div>
  )
}

export default Home