import { Box,Typography,Grid,styled,Button } from '@mui/material' 
import React from 'react'
import {useSelector} from "react-redux"
import CartItem from './CartItems'
import TotalView from './TotalView'
import EmptyCart from "./EmptyCart"


const Background=styled(Box)`
background:#F2F2F2;
`

const Container=styled(Grid)(({theme})=> ({
padding:"30px 135px",
[theme.breakpoints.down('md')]: {
        padding:"15px 0"
      }
    }))

const Header=styled(Box)`
padding:15px 24px;
background:#fff
`

const StyledButton=styled(Box)`
padding:16px 22px;
background:#fff;
box-shadow:0 -2px 10px 0 rgb(0 0 0 / 10%);
border-top:1px solid #f0f0f0;
`
const ButtonWrapper=styled(Button)`
display:flex;
margin-left:auto;
background:#fb641b;
width:250px;
height:51px;
color:#fff;
border-radius:2px
`

const Cart = () => {
  const {cartItems}=useSelector(state=>state.cart);
  return (
    <Background>
      {
        cartItems.length ?
       <Container container>
        <Grid item lg={9} md={9} sm={12} xs={12}>
        <Header>
        <Typography>My Cart({cartItems.length})</Typography>
        </Header>
        
              
          {
            cartItems.map((item)=>(
              <CartItem item={item}/>
            ))
          }

          <StyledButton>
          <ButtonWrapper>Place Order</ButtonWrapper>
          </StyledButton>

            </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>

          <TotalView cartItems={cartItems} />
        </Grid>
       </Container>:
       <EmptyCart />
      }
    </Background>
  )
}

export default Cart