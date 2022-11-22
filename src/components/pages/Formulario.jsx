import { Button, Grid, TextField, Typography } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import React from 'react'
import '../styles/Formulario.css'
import { useFormik } from 'formik';
import * as Yup from 'yup'


const Formulario = () => {

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Debe ingresar un nombre valido"),
      email: Yup.string().required("Debe ingresar un email valido"),
      password: Yup.string().required("Debe ingresar una contrasena valida")
    }),
    onSubmit: (data) => {
      console.log(data);
    }
  })

  return (
    <div>
      <Typography variant='h4' color={"primary"} align="center" >Formulario de registro</Typography>
      <form className='form-container' onSubmit={handleSubmit} >

        <Grid
          container
          alignItems={"center"}
          justifyContent={"space-evenly"}
          spacing={2}
          sx={{ width: "100%" }} >

          <Grid item xs={12} md={8}>
            <TextField
              value={values.name}
              onChange={handleChange}
              name='name' type={"text"}
              label="Ingresar nombre" variant="outlined"
              fullWidth
              error={errors.name}
              helperText={errors.name} />
          </Grid>

          <Grid item xs={12} md={8}>
            <TextField
              value={values.email}
              onChange={handleChange}
              name='email' type={"email"}
              label="Ingresar email" variant="outlined"
              fullWidth
              error={errors.email}
              helperText={errors.email} />
          </Grid>

          <Grid item xs={12} md={8}>
            <TextField
              value={values.password}
              onChange={handleChange}
              name='password' type={"password"}
              label="Ingresar contrasena" variant="outlined"
              fullWidth
              error={errors.password}
              helperText={errors.password} />
          </Grid>
        </Grid>
        <Button size='large' type='submit' variant='contained' endIcon={<SendIcon />}>Enviar</Button>
      </form>
    </div>
  )
}

export default Formulario