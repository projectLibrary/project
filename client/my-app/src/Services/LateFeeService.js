import axios from "./axios"
export const lateFee = async (id)=>{
    const result =  await axios.get('/user/librarian/lateFee/'+id)
    console.log(result);
    return result;
}
export const lateFeePost = async (data)=>{
    const result =  await axios.post('/user/librarian/lateFee/', data);
    console.log(result);
    return result;

}