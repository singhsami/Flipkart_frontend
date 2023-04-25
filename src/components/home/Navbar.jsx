import React from 'react'
import {navData} from "../constants/data"
import {Box,Typography,styled} from "@mui/material";





const Component=styled(Box)(({ theme } ) => ({
  
  display:"flex",
  margin: "55px 130px 0 130px",
  justifyContent:"space-between",
  [theme.breakpoints.down('lg')]: {
    margin:"55px 0 0 0"
    
  }
}))

const Container=styled(Box)`
text-align:center;
padding:12px 8px;
`

const Text=styled(Typography)`
font-family:inherit;
font-weight:600;
font-size:14px`


const Navbar = () => {
  return (
    <Component>
    {
         navData.map(data =>(
           <Container>
            <img src={data.url} alt="" style={{width:64}}/>
           <Text>{data.text}</Text>
           </Container>
        ))

    }
    </Component>
  )
}

export default Navbar