import axios from "./axios"

const allIssued = async ()=>{
    var response = await axios.get('/user/librarian/issuedBooks');
    return response.data;
}

export {allIssued}