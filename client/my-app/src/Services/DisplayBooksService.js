import axios from "./axios"

const getAllBooks = async ()=>{
    var response = await axios.get('/user/librarian/bookIndex');
    return response.data;
}

export {getAllBooks}