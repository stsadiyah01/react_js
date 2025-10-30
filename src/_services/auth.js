import { useJwt } from "react-jwt";
import  { API } from "../_api";

API.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userInfo');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);


export const login = async ({ email,password }) => {
  try{
    const { data } = await API.post('/login',{email,password})
    return data
  }catch (error){
    console.log(error);
    throw error
  }
}
export const register = async ({ name,email,username,password }) => {
  try{
    const { data } = await API.post('/register',{name,email,username,password})
    return data
  }catch (error){
    console.log(error);
    throw error
  }
}

export const logout = async () => {
  try {
    await API.post('/logout', {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
  } catch (error) {
    console.log(error);
  } finally {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userInfo');
    window.location.href = '/login';
  }
};










export const useDecodeToken = (token) => {
  const { decodedToken, isExpired } = useJwt(token);

  try{
    if(isExpired){
      return{
        success: false,
        message: "Token expired",
        data: null
      }
    }
    
    return{
      success: true,
      message: "Token valid",
      data: decodedToken
    }

  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null

    }
  }
}