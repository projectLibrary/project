import axios from "./axios"

const viewfeedback = async ()=>{
    var response = await axios.get('/user/librarian/feedback');
    return response.data;
}

export {viewfeedback}