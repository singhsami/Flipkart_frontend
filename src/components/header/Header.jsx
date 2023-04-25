import React from 'react'
import Search from './Search';
import { useState } from "react";
import CustomButtons from './CustomButtons';
import { AppBar, Toolbar, Box, styled,  Typography, IconButton, Drawer,List, ListItemButton, } from "@mui/material";
import { Link } from 'react-router-dom';
import { Menu } from "@mui/icons-material"

const StyleHeader = styled(AppBar)`
height:10vh;
background-color:#2874f0
`

const Component = styled(Link)`
margin-left:12%;
line-height:0;
text-decoration:none;
color:inherit;
`
const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: "0 8px 0 8px",
  [theme.breakpoints.down("md")]: {
    display: "none"
  }
}))



const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block"
  }
}))



const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }



  return (

    <StyleHeader>
      <Toolbar style={{ minHeight: 55 }}>

        <MenuButton color="inherit" onClick={handleOpen}>
          <Menu />
        </MenuButton>

        <Drawer open={open} onClose={handleClose}>
        {  
          <Box style={{width:200 }} onClick={handleClose}>
          <List>
             <ListItemButton >
               <CustomButtons />
             </ListItemButton>
          </List>
          </Box>
}
        </Drawer>

        <Component to="/">
          <img src={logoURL} alt="logo" style={{ width: 75 }} />

          <Box>
            <Typography style={{ fontSize: 11, fontStyle: "italic" }}>Explore
              <Box component="span" style={{ color: "#FFE500" }}> Plus</Box>
              <img src={subURL} alt="sublogo" style={{ width: 10, marginLeft: 1 }} />
            </Typography>
          </Box>


        </Component>
        <Search />

        <CustomButtonWrapper>
        <CustomButtons />
        </CustomButtonWrapper>



      </Toolbar>
    </StyleHeader>


  )
}

export default Header