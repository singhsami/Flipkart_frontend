import { Box, InputBase, styled,List,ListItem } from '@mui/material';
import React from 'react';
import {useState,useEffect} from "react"
import SearchIcon from "@mui/icons-material/Search"
import {useSelector,useDispatch} from "react-redux";
import { getProducts } from '../../redux/actions/pruductActions';
import {Link} from "react-router-dom";


  const SearchContainer = styled(Box)`
  background-color:#fff;
  width:450px;
  border-width:2px;
  display:flex;
  margin-left:10px;
  
`
  const SearchWrapper = styled(Box)`
  color:#2874f0;
  margin-top:3px;
  margin-right:7px
  
`

const ListWrapper = styled(List)`
position:absolute;
background:#FFFFFF;
color:black;
margin-top:36px;
margin-right:40px,
`

 const Search = () => {
 const [text,setText]=useState("")
 const {products}=useSelector(state =>state.getProducts)

 const dispatch=useDispatch();

 useEffect(()=>{
 dispatch(getProducts())
 },[dispatch])

 const getText=(text)=>{
    setText(text)
  }
    return (
        <SearchContainer>
            <InputBase placeholder='Search for products,brands and more' 
            onChange={(e)=>getText(e.target.value)} style={{width:480, paddingLeft:15,fontSize:14 }}
              value={text}
             
            />
            
            <SearchWrapper>
            <SearchIcon />
            </SearchWrapper>
            {
              text &&
              <ListWrapper>
                { 
                  products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
                    <ListItem>
                    <Link to={`/product/${product.id}`}
                    onClick={()=>setText("")}  style={{textDecoration:"none",color:"inherit"}}>
                    {product.title.longTitle}
                      </Link>
                    </ListItem>
                  
                  ))
                } 
              </ListWrapper>
            }
        </SearchContainer>
    )
}

export default Search;