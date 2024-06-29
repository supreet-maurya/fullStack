import axios from "axios";
const URL = 'http://localhost:8000';


async function postData(url , data) {
    const response = await fetch(url, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), 
    });
    return response.json();
}
  
export const authenticationSignUp = async (data) =>{
    try{
      // console.log("api.js")
      return await postData(`${URL}/signup` , data);
    }
    catch(error){
      console.log('Error in sign up' , error)
    }
}


export const authenticationLogin = async (data) =>{
    try{
      // console.log("api.js")
      return await postData(`${URL}/login` , data);
    }
    catch(error){
      console.log('Error in login ' , error)
    }
}


export const payUsingPaytm = async (data) => {
  try{
      let res = await axios.post(`${URL}/payment` , data);
      return res.data;
  }
  catch(error){
    console.log('Error while calling payment api' , error)
  }
}