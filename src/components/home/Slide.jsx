import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { styled, Box,Divider, Typography, Button } from "@mui/material"
import { Link } from 'react-router-dom';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Component = styled(Box)`
margin-top:10px;
background:#FFFFFF
`

const Deal = styled(Box)`
padding:15px 20px;
display:flex;
`

const Timer = styled(Box)`
display:flex;
margin-left:10px;
align-items:center;
color:#7f7f7f; 

`
const DealText = styled(Typography)`
font-size:22px;
font-weight:600;
margin-right:25px;
line-height:32px;
`
const ViewAllButton = styled(Button)`
margin-left:auto;
background-color:#2874f0;
border-radius:2px;
font-weight:600;
font-size:13px;
`;

const Image=styled("img")
({
width:"auto",
height:"150px"
})

const Text = styled(Typography)`
margin-top:5px;
font-size:14px;
`;

const Slide = ({ products,title,timer }) => {
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

  const renderer = ({ hours, minutes, seconds }) => {
    return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>
  }


  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {
          timer && 
          <Timer>
          <img src={timerURL} alt="countdown" style={{ width: 24 }} />
          <Countdown
            date={Date.now() + 5.04e+7} renderer={renderer} />
        </Timer> 
        }
        
        <ViewAllButton variant='contained' color='primary'>view All</ViewAllButton>
      </Deal>
      <Divider />
      <Carousel 
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={4000}
        swipeable={false}
        draggable={false}
        showDots={false}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">

        {
          products.map(product => (
           <Link to={`product/${product.id}`} style={{textDecoration:"none"}}>
             <Box textAlign="center" style={{padding:"25px 15px"}}>
            <Image src={product.url} alt="product" />
            <Text style={{fontWeight:600,color:"#212121"}}>{product.title.shortTitle}</Text>
            <Text style={{color:"green"}}>{product.discount}</Text>
            <Text style={{color:"#212121",opacity:".6"}}>{product.tagline}</Text>
           
            </Box>
            </Link>
          ))
        }
      </Carousel>
    </Component>
  )
}

export default Slide