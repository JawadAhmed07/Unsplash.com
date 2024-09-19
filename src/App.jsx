import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button, colors, IconButton, TextField, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { BorderOuterSharp, Javascript, SearchOutlined } from '@mui/icons-material'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Header/>
    </div>
      <div className='m-2 mx-5'>
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}
          justifyContent={'space-between'}
          bgcolor={"olivedrab"} padding={2}
        >
          <Typography className='text-white underline' variant='h5'>
            Image Gallery
          </Typography>

          <Button endIcon={<AccountCircleIcon />} variant="contained">Login</Button>

        </Box>
        <Box display={"flex"} gap={2} paddingY={2}>
          <TextField id="outlined-basic" label="Search Here"  variant="outlined"
            fullWidth />

        <Button variant="outlined"
          endIcon={<SearchOutlined />}
          color={"primary"} >
          Search
        </Button>
        </Box>
      </div>
    </>
  )
}

export default App
