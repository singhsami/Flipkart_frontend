import React from 'react'
import {Box, Typography,styled} from "@mui/material"

const Empty=styled(Box)`
background:#fff;

`

const Background=styled(Box)`
height:65vh;
width:80%;
margin:140px 0 0 120px;

`
const Container=styled(Box)`
text-align:center;
padding:60px;
padding-left:70px;
`
const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    

  return (
    <Empty>
    <Background>
    <Container>
        <img src={imgurl} alt="Empty" style={{width:"15%"}}/> 
        <Typography>Your cart is Empty</Typography>
        <Typography>Add items to it now</Typography>
    </Container>
    </Background>
    </Empty>
  )
}

export default EmptyCart