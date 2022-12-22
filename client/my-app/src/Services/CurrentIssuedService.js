import axios from "./axios"

const currentissuedbooks = async ()=>{
    var response = await axios.get('/user/librarian/currentIssued');
    console.log("hi");
    return response;
}

export {currentissuedbooks}