import axios from "./axios"

const returnBookPost = async (data)=>{
    var response = await axios.post('/user/librarian/returnBook', data);
    console.log(response);
    return response;
}

export {returnBookPost}