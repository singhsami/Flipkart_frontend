import React from 'react'
import {Box,Typography,styled,Button} from "@mui/material"
import { addEllipsis } from '../../utils/common-utils'
import ButtonGroup from './ButtonGroup';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Container=styled(Box)`
border-top:1px solid #f0f0f0;
display:flex;
background:#fff
`

const LeftComponent=styled(Box)`
margin:20px;
display:flex;
flex-direction:column;
`

const SmallText=styled(Typography)`
color:#878787;
margin-top:10px;
font-size:14px;
`

const Remove=styled(Button)`
margin-top:20px;
font-size:16px;
color:#000;
fontWeight:600
`

const CartItem = ({item}) => {
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
  const dispatch=useDispatch();

    const handleClick = (id) =>{
        dispatch(removeFromCart(id))
     }


  return (
    <Container>
      <LeftComponent>
          <img src={item.url} alt="product" width={150}/>
          <ButtonGroup />
      </LeftComponent>

      <Box style={{margin:"20px"}}> 
        <Typography>{addEllipsis(item.title.longTitle)}
        </Typography>
       
        <SmallText>Seller:RetailNet
        <Box component="span">
        <img src={fassured} alt="logo" style={{width:50,marginLeft:10}}/></Box>
        </SmallText>

        <Typography style={{margin:"20px 0"}}>
        <Box component="span" style={{ fontWeight: 600,fontSize:18 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>{item.price.discount}</Box>
      </Typography>

      <Remove onClick={()=>handleClick(item.id)}>Remove</Remove>
      </Box>

      
      
    </Container>
  )
}

export default CartItem