import axios from "./axios"
const getMyBook = async ()=>{
    const result =  await axios.get('/user/myBook')
    console.log(result);
    return result;
}
export {getMyBook}