import { Typography,Box,styled } from '@mui/material'
import React from 'react'

const Background=styled(Box)`
background:#F2F2F2`

const Header=styled(Box)
`
padding:15px 24px;
background:#fff;

box-shadow:0 -2px 10px 0 rgb(0 0 0 / 10%);
border-top:1px solid #f0f0f0;
margin-left:10px;
`
const Heading=styled(Typography)`
color:#878787;

`
const Container=styled(Box)`
padding:15px 24px;
background:#fff;
margin-left:10px;
& > p {
  margin-bottom:20px;
  font-size:14px;
}
border-bottom:1px solid #f0f0f0;
`
const Price=styled(Box)`
float:right;
`
const TotalView = ({cartItems}) => {
let price=0;
let discount=0;
  {
    cartItems.map((item)=>{
     price += item.price.mrp;
     discount += (item.price.mrp - item.price.cost)
  })
  }

  return (
<Background>
  <Header>
    <Heading>PRICEDETAILS</Heading>
  </Header>

  <Container>
  <Typography>Price ({cartItems?.length}item)
  <Price component="span">₹{price}</Price>
  </Typography>

  <Typography>Discount
  <Price component="span">-₹{discount}</Price>
  </Typography>

   <Typography >Delivery Charges
  <Price  component="span">₹40</Price>
  </Typography>
</Container>
  <Box style={{padding:"16px 22px",
background:"#fff",marginLeft:10,boxShadow:"0 -2px 15px 0 rgb(0 0 0 / 10%)",borderTop:"1px solid #f0f0f0"}}>
  <Typography variant='h6'>Total Amount
  <Price component="span">₹{price-discount+40}</Price>
  </Typography>
  
  <Typography style={{color:"green",fontWeight:500,marginTop:10}}>You will save ₹{discount-40} on this Order</Typography>
  </Box>
  
  
</Background>
  )
}

export default TotalView