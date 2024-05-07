import { Box, Button, Container, TextField, Typography, colors } from '@material-ui/core';
import { Margin } from '@mui/icons-material';
import React, { useRef } from 'react'
import { Form } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';

const CommonForm = ({handleSubmit,handleChange,formData,simpleValidator,isEdit}) => {
 
  return (
    <Container maxWidth="sm">
      <Typography variant='h4' align='center' color='primary'>{isEdit ? "UPDATE USER" : "ADD USER"}</Typography>
      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
        <form onSubmit={handleSubmit}>
          <TextField 
            fullWidth
            variant="outlined" 
            label="Enter name" 
            name='name' 
            value={formData.name} 
            onChange={handleChange}
            margin="normal"
            onBlur={()=>simpleValidator.current.showMessageFor('name')} />
            {simpleValidator.current.message('name', formData.name, 'required')}
          
          <TextField 
            fullWidth
            variant="outlined" 
            label="Enter Email" 
            name='email'  
            value={formData.email} 
            onChange={handleChange} 
            margin="normal"
            onBlur={()=>simpleValidator.current.showMessageFor('email')} />
            {simpleValidator.current.message('email', formData.email, 'required')}
          
          <TextField 
            fullWidth
            variant="outlined" 
            label="Enter Password" 
            name='password' 
            value={formData.password} 
            onChange={handleChange} 
            margin="normal"
            onBlur={()=>simpleValidator.current.showMessageFor('password')} />
            {simpleValidator.current.message('password', formData.password, 'required')}
          
          <TextField 
            fullWidth
            variant="outlined" 
            label="Enter City" 
            name="city" 
            value={formData.city} 
            onChange={handleChange} 
            margin="normal"
            onBlur={()=>simpleValidator.current.showMessageFor('city')} />
            {simpleValidator.current.message('city', formData.city, 'required')}
          <TextField 
            fullWidth
            variant="outlined" 
            label="Enter State" 
            name="state" 
            value={formData.state} 
            onChange={handleChange} 
            margin="normal"
            onBlur={()=>simpleValidator.current.showMessageFor('state')} />
            {simpleValidator.current.message('state', formData.state, 'required')}
          <TextField 
            fullWidth
            variant="outlined" 
            label="Enter Country" 
            name="country" 
            value={formData.country} 
            onChange={handleChange} 
            margin="normal"
          onBlur={()=>simpleValidator.current.showMessageFor('country')} />
          {simpleValidator.current.message('country', formData.country, 'required')}
          <TextField 
            fullWidth
            variant="outlined" 
            label="Enter Occupation" 
            name='occupation' 
            value={formData.occupation} 
            onChange={handleChange} 
            margin="normal"
            onBlur={()=>simpleValidator.current.showMessageFor('occupation')} />
            {simpleValidator.current.message('occupation', formData.occupation, 'required')}
          <TextField 
            fullWidth
            variant="outlined" 
            label="Enter PhoneNumber" 
            name='phoneNumber' 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            margin="normal"
          onBlur={()=>simpleValidator.current.showMessageFor('phoneNumber')} />
          {simpleValidator.current.message('phoneNumber', formData.phoneNumber, 'required')}
          <Button 
            type='submit' 
            fullWidth
            variant='contained'  
            color='primary'
            size='large'
            mt={4}
          >
            {isEdit ? "EDIT" : "ADD"}
          </Button>
        </form>
      </Box>
    </Container>
   
  )
}

export default CommonForm;
