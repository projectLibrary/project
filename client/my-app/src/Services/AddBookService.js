import axios from "./axios"

const addBook = async (data)=>{
    var response = await axios.post('/user/librarian/addBook', data);
    console.log(response);
    return response;
}

export {addBook}