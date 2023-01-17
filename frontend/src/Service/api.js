import axios from 'axios'
//GetAllDetails.............
const url = "http://localhost:4000/get-details";
export const GetAllDetails = async()=>{
  
    return await axios.get(`${url}`)
}
//getAddedDetById..............
const url2 = "http://localhost:4000";
export const getAddedDetById = async(id)=>{
    id = id ||''
    return await axios.get(`${url2}/${id}`)
   
}
//editDetById...................
const url4 = "http://localhost:4000/update";
export const editDetById = async(id, formdata)=>{
return  await axios.patch(`${url4}/${id}`,formdata)
}
//deleteDataById..................
const url5 = "http://localhost:4000/delete";
export const deleteDataById = async(id)=>{
    return await axios.delete(`${url5}/${id}`)
}