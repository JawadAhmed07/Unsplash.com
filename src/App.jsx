import { useEffect, useState } from 'react'
import './App.css'
import { Avatar, Box, Button, CircularProgress, colors, IconButton, Modal, TextField, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { BorderOuterSharp, Javascript, SearchOutlined } from '@mui/icons-material'
import Header from './components/Header'
import { Masonry } from '@mui/lab';

function App() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showModal, setShowmodal] = useState(false);
  const [isChosen, setIschosen] = useState(null);


  useEffect(() => {
    getImagesFromUnsplash();
  }, [])

  const getImagesFromUnsplash = () => {
    fetch(
      "https://api.unsplash.com/photos/?page=1&client_id=CVa2Z-qUX4S_XCRrzlApSEO92QlzilwEmi-tE4JdfgM&per_page=30"
    )
      .then((res) => res.json())
      .then((res) => {
        setImages(res)
        setLoading(false)
      }
      )
  }
  const searchImagesFromUnsplash = () => {
    if (search) {
      fetch(
        `https://api.unsplash.com/search/photos/?page=1&query=${search}&client_id=CVa2Z-qUX4S_XCRrzlApSEO92QlzilwEmi-tE4JdfgM&per_page=30`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log("search ka response: ", res)
          setImages(res.results)
          setLoading(false)
        }
        )
    }
  }

  return (
    <>
      <div>
        <Modal
          // height={200}
          sx={{
            display: "flex",
            justifyContent: "center",
            // width: "80%",
            alignItems: "center",
            // alignSelf:"center"
          }}
          open={showModal}
          onClose={() => setShowmodal(false)}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "80%"
              // alignItems: "center",
            }}
          >
            <img
              width={"50%"}
              style={{
                maxHeight: 700,
              }}
              className='contain'
              src={isChosen?.urls?.regular} />
            <Box
              // width={"100%"}
              display={"block"}
              padding={2}
              width={"50%"}
              bgcolor={'white'}
            >
              <Typography fontWeight={"medium"} paddingTop={2} variant='h4'>{isChosen?.alt_description}</Typography>
              <Box display={"flex"} gap={2} paddingTop={2} >
                <Avatar
                  src={isChosen?.sponsorship?.sponsor?.profile_image.medium|| isChosen?.user.profile_image?.medium}
                />
                <Box >
                  <Typography>UserName:{isChosen?.sponsorship?.sponsor?.name|| isChosen?.user?.name}</Typography>
                  <Typography>Total photos:{isChosen?.sponsorship?.sponsor?.total_photos||isChosen?.user?.total_photos}</Typography>
                </Box>
              </Box>


              <Typography fontWeight={"light"}
                paddingTop={2}
                variant='h6'>Total Likes: {isChosen?.likes}</Typography>

              {/* <Typography fontWeight={"light"} 
              paddingTop={2}
              variant='h6'>Update at= {isChosen?.updated_at}</Typography> */}


            </Box>
          </Box>


        </Modal>
        <Header />
        <div className='m-2  container mx-auto'>
          <Box display={"flex"} gap={2}
            marginTop={2}
            marginBottom={2}
            paddingY={2}>
            <TextField
              id="outlined-basic"
              label="Search Here"
              color='secondary'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              variant="outlined"
              fullWidth />

            <Button variant="outlined"
              endIcon={<SearchOutlined />}
              color={"secondary"}
              onClick={searchImagesFromUnsplash}
              disabled={search === "" || search.length < 3} >
              Search
            </Button>
          </Box>
          {
            loading ? (
              <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10"
              }}>
                <CircularProgress color={"secondary"} size={60} />
              </Box>
            ) : null
          }

          <Masonry
            columns={{ sm: 1, lg: 2, md: 3, xl: 4 }}
            spacing={2}
          >
            {
              images.map((item) => (
                <img
                className='hover:cursor-pointer'
                  onClick={() => {
                    setShowmodal(true)
                    setIschosen(item)
                  }}
                  key={item.id} src={item.urls.regular} />
              ))}
          </Masonry>
        </div>
      </div>
    </>
  )
}

export default App;
