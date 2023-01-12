import axios from "./axios"

export const getOneBookDetails = async (id)=>{
    const result =  await axios.get('/user/applyBook/'+id)
    console.log(result);
    return result;
}

export const applyBook = async (data)=>{
    const result =  await axios.post('/user/applyBook/', data);
    console.log(result);
    return result;
}

// export default{
//     applyBook: applyBook,
//     getOneBookDetails:getOneBookDetails
// };
