import axios from "./axios"
const getUserProfile = async ()=>{
    const result =  await axios.get('/user/profile')
    console.log(result);
    return result;
}
export {getUserProfile}