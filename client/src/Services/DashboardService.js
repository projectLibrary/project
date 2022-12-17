import axios from "./axios"
const getAllBooks = async ()=>{
    const result =  await axios.get('/user/bookIndex')
    console.log(result);
    return result;
}
const getAllBookss = async ()=>{
    const result =  await axios.get('/user/bookIndex')
    console.log(result);
    return result;
}
export {getAllBooks}