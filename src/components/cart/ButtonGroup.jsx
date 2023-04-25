import React from 'react'
import {Button,ButtonGroup,styled} from "@mui/material"

const Component=styled(ButtonGroup)`
margin-top:30px;
`
const StyledComponent=styled(Button)`
border-radius:50%
`

const GroupedButton = () => {
  return (
    <Component>
        <StyledComponent>-</StyledComponent>
        <Button disabled>1</Button>
        <StyledComponent>+</StyledComponent>
        
    </Component>
  )
}

export default GroupedButton