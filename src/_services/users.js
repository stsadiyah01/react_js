import API from "../_api";

export const getUsers = async () => {
  const {data} = await API.get("/users",{
    headers : {
      "Authorization" : `Bearer ${localStorage.getItem('accessToken')}`
    }
  })
  return data.data;
};


export const showUser = async (id) => {
  try{
    const {data} = await API.get(`/users/${id}`,{
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    return data.data

  } catch (error) {
    console.log(error);
    throw error

  }
}

export const deleteUser = async (id) => {
  try{
    await API.delete(`/users/${id}`,{
      headers: {
        "Authorization" : `Bearer ${localStorage.getItem('accessToken')}`
      }
    })

  }catch (error) {
    console.log(error);
    throw error

  }
}