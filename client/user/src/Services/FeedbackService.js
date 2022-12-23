import axios from "./axios"
const feedbackCreate = async (data)=>{
    const result =  await axios.post('/user/feedback', data)
    console.log(result);
    return result;
}
export {feedbackCreate}