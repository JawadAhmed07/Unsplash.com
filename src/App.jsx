import { useEffect, useState } from 'react'
import './App.css'
import { Box, Button, colors, IconButton, TextField, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { BorderOuterSharp, Javascript, SearchOutlined } from '@mui/icons-material'
import Header from './components/Header'

function App() {

const [images,setImages]=useState();
const [loading,setLoading]=useState(true);


useEffect(()=>{
  getImagesFromUnsplash();
},[])

const getImagesFromUnsplash= ()=>{
  fetch(
    "https://api.unsplash.com/photos/?client_id=CVa2Z-qUX4S_XCRrzlApSEO92QlzilwEmi-tE4JdfgM&per_page=30"
  )
  .then((res)=>res.json())
  .then((res)=>
  {
    setImages(res)
    setLoading(false)
  }

)
}

  return (
    <>
    <div>
      <Header/>
    </div>
      <div className='m-2 mx-5'>
        {/* <Box display={"flex"} flexDirection={"row"} alignItems={"center"}
          justifyContent={'space-between'}
          bgcolor={"olivedrab"} padding={2}
        >
          <Typography className='text-white underline' variant='h5'>
            Image Gallery
          </Typography>

          <Button endIcon={<AccountCircleIcon />} variant="contained">Login</Button>

        </Box> */}
        <Box display={"flex"} gap={2}
         marginTop={2} 
         marginBottom={2} 
         paddingY={2}>
          <TextField 
          id="outlined-basic" 
          label="Search Here" 
          color='secondary'  
          variant="outlined"
          fullWidth />

        <Button variant="outlined"
          endIcon={<SearchOutlined />}
          color={"secondary"} >
          Search
        </Button>
        </Box>
      </div>
    </>
  )
}

export default App
