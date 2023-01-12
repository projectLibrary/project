import React from 'react';
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBTypography,
  MDBBtn

} from 'mdb-react-ui-kit';
import {useState, useEffect} from 'react'
import { allIssued } from '../../Services/AllissuedService'
function Issued() {
  const [issuedBooks, setIssuedBook] = useState([]);
  console.log(issuedBooks);
useEffect(() => {
  allIssued().then((data) => {
   console.log(data);
   setIssuedBook(data.data );
     });
 }, []);

 const getRow = (issuedBook, index)=>{
   return (
       <tr key={index}>
            <td>{issuedBook.id}</td>
          <td>{issuedBook.Book.bookname}</td>
           <td>{issuedBook.User.firstname} {issuedBook.User.lastname}</td>
           <td>{issuedBook.userCategory}</td>
           <td>{issuedBook.issuedDate}</td>
           <td>{issuedBook.expectedreturnDate}</td>
           <td>{issuedBook.returnDate}</td>
           
       </tr>
   )
}
  return (
    <div>
        <div class="table-responsive">
      <MDBTypography tag='h4' style={{ textAlign: "center", marginTop: "20px" }}>Issued Book List</MDBTypography>
      <MDBTable striped hover w-auto style={{ borderRadius: "7px", width: "980px", marginTop: "50px", marginLeft: "150px", boxShadow: '2px 2px 2px #9a9a9a' }}>

        <MDBTableHead>
          <tr>
            <th scope='col'>BookId</th>
            <th scope='col'>Book Name</th>
            <th scope='col'>Book holders Name</th>
            <th scope='col'>User Category</th>
            <th scope='col'>Issued Date</th>
            <th scope='col'>Expected Return Date</th>
            <th scope='col'>Return Date</th>
       
          </tr>
        </MDBTableHead>
        <MDBTableBody>
         {issuedBooks.map(getRow)}

        </MDBTableBody>

      </MDBTable>
      </div>
    </div>
  );
}
export default Issued;