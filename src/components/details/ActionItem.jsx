import { Box, Button,styled } from '@mui/material'
import React from 'react';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { addToCart } from '../../redux/actions/cartActions';
import { useState } from 'react';
import { payUsingPaytm } from '../../service/api';
import {post} from "../../utils/paytm";

const LeftContainer = styled(Box)(({theme}) => ({
  minWidth:"14%",
  padding:"40px 0 0 80px",
  [theme.breakpoints.down("lg")]:{
    padding:"20px 40px",
  }
}))


const Image=styled('img')
({
width:"95%",
padding:"15px"
})

const StyledButton = styled(Button)(({theme}) => ({
width:"46%",
height:"50px",
borderRadius:"2px",
[theme.breakpoints.down("lg")]:{
    width:"46%",
  }
}))

const ActionItem = ({product}) => {

const navigate=useNavigate();
const dispatch=useDispatch();

const [quantity,setQuantity]=useState(1);

const {id} = product;

const addItemToCart =()=>{
  dispatch(addToCart(id,quantity));
navigate("/cart");
}


   const buyNow =()=>{
    let response= payUsingPaytm({amount:1,email:"qwer@gmail.com"})
    let information={
      action:"https://securegw-stage.paytm.in/order/process",
      params:response,
    }
    post(information)
   }
  
  return (
    <LeftContainer>
    <Box style={{border:"1px solid #f0f0f0",padding:"15px 20px"}}>
      <Image src={product.detailUrl} alt="productImage"/>
    </Box>  
      <StyledButton variant='contained' onClick={()=>addItemToCart()} style={{marginRight:10,background:"#ff9f00"}}><ShoppingCartIcon />Add to Cart</StyledButton>
      <StyledButton variant='contained' onClick={()=>buyNow()} style={{marginRight:10,background:"#fb541b"}}><FlashOnIcon />Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItem