import axios from 'axios';
const url = "http://localhost:8000";

// add User Api
export const register = async ({ formdata }) => {
  try {
    await axios.post(`${url}/register`, formdata);
    alert("User Added Successfully");
  } catch (err) {
    console.log(err);
  }
};

// login api
export const login = async ({ usercheck }) => {
  try {
    const res = await axios.post(`${url}/logincheck`, usercheck);
    const data = res.data;
    localStorage.setItem("userId", data.userId);
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);
    localStorage.setItem("firstname", data.firstname);
    localStorage.setItem("lastname", data.lastname);
    return { success: true, data };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: err.response?.data?.message || "Login failed. Please try again.",
    };
  }
};

// get all user api
export const getAllUsers=async()=>{
  try{
    const response=await axios.get(`${url}/getdata`)
    const data=response.data.data;
    return data;
  }
  catch(err){
 console.log(err);
  }
}

// get one user api
export const getoneUserData = async (id) => {
  try{
    const response=await axios.get(`${url}/getonedata/${id}`)
    const data=response.data;
    return data;
  }
  catch(err){
 console.log(err);
  }
}

// get all product api
export const getAllProduct=async()=>{
  try{
    const response=await axios.get(`${url}/getproduct`)
  console.log("product data",response.data.data);
    const data=response.data.data;
    return data;
  }
  catch(err){
 console.log(err);
  }
}

//get products by Id
export const getoneUserProductData = async (id) => {
    try{
      const response=await axios.get(`${url}/getproduct`)
      const data=response.data.data;
      const getoneUserData= data.filter((item)=>item.createdBy=== id)
      console.log("getoneuserdata",getoneUserData);
  
      return getoneUserData;
    }
    catch(err){
   console.log(err);
    }
}

export const getoneProductData = async (id) => {
  try{
    const response=await axios.get(`${url}/getoneproduct/${id}`)
    const data=response.data;
    console.log("getone......",data);
    return data;
  }
  catch(err){
 console.log(err);
  }
}

// product add api
export const productAdd = async (formdata) => {
  try {
   const res= await axios.post(`${url}/addproduct`, formdata);
    alert("Product Added Successfully");
    if(res)
    {
      return {success:true}
    }

  } catch (err) {
    console.log(err);
  }
};

// delete product api
export const deleteoneUserProductData = async (id) => {
  try {
    const response = await axios.delete(`${url}/deleteproduct/${id}`);
    if (response.status === 200) {
      alert('Product Deleted Successfully');
      return true;
    }
  } catch (err) {
    console.log('Delete Error:', err);
    alert('Failed to delete the product.');
    return false;
  }
};

// update product data api
export const UpdateproductData = async (productdata, id) => {
  try {
    const response = await axios.put(`${url}/updateproduct/${id}`, productdata);
    if (response.status === 200) {
      alert('Product updated Successfully');
      return { success: true };
    }
  } catch (err) {
    console.log('Update Error:', err);
    alert('Failed to update the product.');
    return false;
  }
};

// product book api
export const bookProduct = async (bookingData) => {
  try {
    const response = await axios.post(`${url}/bookproduct`, bookingData);
    return response.data;
  } catch (err) {
    throw err;
  }
};

// get all bookings
export const getAllBookings=async()=>{
  try{
    const response=await axios.get(`${url}/getallbooking`)
  console.log("booking data",response.data.data);
    const data=response.data.data;
    return data;
  }
  catch(err){
 console.log(err);
  }
}

