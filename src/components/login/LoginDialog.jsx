import React from 'react'
import { Dialog, TextField, Box, Typography, styled, Button,DialogContent } from "@mui/material"
import { useState,useContext } from 'react'
import {authenticateSignup,authenticateLogin} from "../../service/api.js"
import { DataContext } from '../../context/DataProvider.jsx'

const Component = styled(DialogContent)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
`;

const Image = styled(Box)`
background:#2874f0 URL(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:80%;
width:30%;

/* //width: 40%;
    //height: 100%; */

padding:45px 35px;
& > p, & > h5{
font-weight:600;
color:#FFFFFF
}
`
const LoginButton = styled(Button)`
margin-top:30px;
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`
const Error = styled(Typography)`
color:#ff6161;
text-transform:none;
font-weight:600;
line-height:0;
font-size:10px;
margin-top:2px;
`

const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
& > div > button, & > p{
    margin-top:20px;
}
`
const accountinitialvalues={
    login:{view:"login",
    heading:"Login",
    subheading:"Get access to your orders,wishlist and Recommendation"},
    signup:
    {view:"signup",
     subheading:"Looks like you are new here",
     heading:"Signup"
}
}

const signupIntialValues={
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    phone:"",
}

const loginIntialValues={
    username:"",
    password:"",
    
}

const LoginDialog = ({ open, setOpen }) => {
const [account,toggleAccount] = useState(accountinitialvalues.login)
const [signup,setSignup]=useState(signupIntialValues)
const [login,setLogin]=useState(loginIntialValues)
const [error,SetError]=useState(false)

const {setAccount}=useContext(DataContext)

    function handleClose() {
        setOpen(false)
        toggleAccount(accountinitialvalues.login);
        SetError(false) 
    }

    function toggleSignup(){
toggleAccount(accountinitialvalues.signup)
    }

    function OnInputChange(e){
setSignup({...signup,[e.target.name]:e.target.value})
    }

    function onValueChange(e){
        setLogin({...login,[e.target.name]:e.target.value})
            }

         async function loginUser(e){
                let response=await authenticateLogin(login)
                if(response.status === 200){
                    handleClose();
                    setAccount(response.data.data.firstname)
                }else{
                    SetError(true)
                }
                    }
 
    async function signupUser(){
           let response=await authenticateSignup(signup)
            if(!response) return;
             handleClose();
             setAccount(signup.firstname)
            
    }
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{sx:{maxWidth:"unset"}}}>
            <Component>
                <Box style={{ display: "flex", height: "100%" }}>
                    <Image>
                    <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subheading}</Typography>  
                        </Image>
                   {
                     account.view === "login" ?  
                    <Wrapper> 

                        <TextField variant="standard" onChange={onValueChange} name="username" label="Enter Username"></TextField>
                       {error &&
                        <Error>Please Enter valid username</Error>
                       }
                        <TextField variant="standard" onChange={onValueChange} name="password" label="Enter Password"></TextField>
                        <Typography>By continuing,you agree to Flipkart's Terms of Use and Privacy Policy</Typography>
                        <LoginButton onClick={loginUser}>Login</LoginButton>
                        <Typography style={{ textAlign:"center"}}>OR</Typography>
                        <RequestOTP>Request OTP</RequestOTP>
                        <CreateAccount onClick={toggleSignup}>New to flipkart? Create an account</CreateAccount>

                    </Wrapper>
                    :
                    <Wrapper> 
                    
                        <TextField variant="standard" label="Enter Firstname" name="firstname" onChange={OnInputChange}></TextField>
                        <TextField variant="standard" label="Enter Lastname" name="lastname" onChange={OnInputChange}></TextField>
                        <TextField variant="standard" label="Enter Username" name="username" onChange={OnInputChange}></TextField>
                        <TextField variant="standard" label="Enter Email" name="email" onChange={OnInputChange}></TextField>
                        <TextField variant="standard" label="Enter Password" name="password" onChange={OnInputChange}></TextField>
                        <TextField variant="standard" label="Enter Phone" name="phone" onChange={OnInputChange}></TextField>
                        <LoginButton onClick={signupUser}>Continue</LoginButton>
                    </Wrapper>
                    }
                </Box>
            </Component>

        </Dialog>
    )
}

export default LoginDialog