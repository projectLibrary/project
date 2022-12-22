import React from 'react';
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import "./app.css";
import { useParams } from "react-router-dom";
import {returnBookPost} from '../../Services/ReturnDataService';
function ReturnBook() {

  const [returnBook, setreturnBook] = useState("1");
  const [contacts, setContacts] = useState({});
  const params = useParams();
  console.log(params.id);
  const paramId=params.id;
  const navigate = useNavigate();
  async function saveReturnRequest(e) {
    var res = await returnBookPost({
      returnDate: returnBook,
      issuedId: params.id
    });
    console.log(res);
    if(res.data.data.fee > 0){
      navigate(`/librarian/lateFee/${res.data.data.id}`)
    }
    else{
       alert("Returned Successfully")
       navigate(`/librarian/bookIndex`)
    }

  }



  // useEffect(() => {
  //   getOneBookDetails(params.id).then((data) => {
  //     console.log(data.data);
  //     setContacts(data.data.data);
  //   });

  // }, []);



  console.log(params);


  return (
    <div>

      <center>
        <div className='mainDiv'>
          <form>
            <h1>Return Date</h1>
            <center> <input type="date" id='date' name='returnDate' className='datediv' value={returnBook} onChange={(e) => {
setreturnBook(e.target.value);}} required></input></center>  
              <button  type='button' className='submitButton'onClick={saveReturnRequest}>submit</button>
              
          </form>
        </div>
      </center>

    </div>
  );
}

export default ReturnBook;
