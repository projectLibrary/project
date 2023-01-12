import React from 'react';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { returnBookPost} from '../../Services/ReturnDataService';
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBTypography,
  MDBBtn

} from 'mdb-react-ui-kit';
import {useState, useEffect} from 'react'
import { currentissuedbooks } from '../../Services/CurrentIssuedService'

function CurrentIssued() {
  const redirect=(id)=>{
    console.log(id);
    window.location.href=`/librarian/returnBook/${id}`
  }

  const [currentissuedBooks, setCurrentIssuedBook] = useState([]);
  console.log(currentissuedBooks);
useEffect(() => {
  currentissuedbooks().then((data) => {
   console.log(data);
   setCurrentIssuedBook(data.data.data );
     });
 }, []);

 const getRow = (currentIssuedBook, index)=>{
  console.log(currentIssuedBook);
   return (
       <tr key={index}>
            <td>{currentIssuedBook.id}</td>
          <td>{currentIssuedBook.Book.bookname}</td>
           <td>{currentIssuedBook.User.firstname} {currentIssuedBook.User.lastname}</td>
           <td>{currentIssuedBook.userCategory}</td>
           <td>{currentIssuedBook.issuedDate}</td>
           <td>{currentIssuedBook.expectedreturnDate}</td>
           <td> <MDBBtn style={{height:"40px", width:"70px"}}color='info' onClick={()=>redirect(currentIssuedBook.id)}>Return</MDBBtn> </td>
           
       </tr>
   )
}


  return (
    <div>
        <div class="table-responsive">
      <MDBTypography tag='h4' style={{ textAlign: "center", marginTop: "20px" }}>Currently Issued Book List</MDBTypography>
      <MDBTable striped hover w-auto style={{ borderRadius: "7px", width: "980px", marginTop: "50px", marginLeft: "150px", boxShadow: '2px 2px 2px #9a9a9a' }}>

        <MDBTableHead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Book Name</th>
            <th scope='col'>Book holders Name</th>
            <th scope='col'>User Category</th>
            <th scope='col'>Issued Date</th>
            <th scope='col'>Expected Return Date</th>
            <th scope='col'>Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          
        {currentissuedBooks.map(getRow)}
          

        </MDBTableBody>

      </MDBTable>
      </div>
    </div>
  );
}
export default CurrentIssued;