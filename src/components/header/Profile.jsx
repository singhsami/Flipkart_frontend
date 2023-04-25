import React from 'react'
import {Box,Typography,Menu,MenuItem,styled} from "@mui/material"
import { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component=styled(Menu)`
margin-top:5px;
`

const Profile = ({account,setAccount}) => {
const [open, setOpen] = useState(false)

function handleClick(event){
    setOpen(event.currentTarget)
}

const handleClose = () => {
    setOpen(false);
  };

  const LogoutUser = () => {
    setAccount("")
  };


  return (
    <>
      <Box onClick={handleClick}>
      <Typography  style={{marginTop:2}}>{account}
      </Typography>

      <Component
          anchorEl={open}   
        open={Boolean(open)}
        onClose={handleClose}
       
        
      >
        <MenuItem onClick={()=>{handleClose();LogoutUser()}}>
        <PowerSettingsNewIcon color="primary" fontSize="small"></PowerSettingsNewIcon>
        <Typography style={{marginLeft:12, fontSize:14}}>Logout</Typography>
        </MenuItem>
      </Component>
      </Box>
    </>
  )
}

export default Profile
