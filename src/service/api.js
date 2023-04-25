import axios from "axios"

//const URL="http://localhost:8000"

const PORT="https://flipkart-v3vn.onrender.com"

export const authenticateSignup=async(data)=>{
    try{
       return await axios.post(`${PORT}/signup`,data)
    }
    catch(error){
console.log("error");
    }
}

export const authenticateLogin=async(data)=>{
    try{
      return await axios.post(`${PORT}/login`,data)
    }
    catch(error){
console.log("Error while calling login api",error);
return error.response
    }
}

export const payUsingPaytm = async (data) => {
    try {
        return await axios.post(`${URL}/payment`,data);
    } catch (error) {
        console.log('Error while calling paytm api', error);
    }
}
