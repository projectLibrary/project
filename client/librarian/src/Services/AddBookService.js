import axios from "./axios"

const addBook = async (data)=>{
    var response = await axios.post('/user/librarian/addBook', data);
    console.log(response);
    return response;
}
const deleteBook = async (id)=>{
    console.log("in delete");
    console.log(id);
    await axios.get('/user/librarian/deleteBook/'+id);
    console.log("after del");

}

export {addBook,deleteBook}