import styled from '@emotion/styled';
import React from 'react'
import Carousel from "react-multi-carousel";
import { bannerData } from '../constants/data';
import "react-multi-carousel/lib/styles.css";

const Image=styled("img")
({
width:"100%",
height:"280px"
})



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Banner = () => {
  return (
   
  <Carousel 
  autoPlay={true}
  autoPlaySpeed={3000}
  swipeable={false}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} 
  infinite={true}
  keyBoardControl={true}
  containerClass="carousel-container"
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"

  >
  {
    bannerData.map(data=>(
      <Image src={data.url} alt=""/>
    ))
  }
 
</Carousel>
  )
}

export default Banner