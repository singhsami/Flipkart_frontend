import * as actionTypes from "../constants/productConstant"
import axios from "axios";


//const URL="http://localhost:8000";

const PORT="https://flipkart-v3vn.onrender.com"

export const getProducts = () => async(dispatch)=>{
 try{
const { data }=await axios.get(`${PORT}/products`)
dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS,payload:data}) 
    
    }
 
 catch(error){
    dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message})
 }
}
export const getProductDetails = (id) => async (dispatch) => {
   try {
       dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
       const { data } = await axios.get(`${PORT}/product/${id}`);
       
       dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

   } catch (error) {
       dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response});

   }
};


