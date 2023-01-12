import React from 'react';
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBTypography,
  MDBBtn

} from 'mdb-react-ui-kit';
import {useState, useEffect} from 'react'
import { getAllBooks } from '../../Services/DisplayBooksService'
import {deleteBook} from '../../Services/AddBookService';
function Books() {
  const   redirect=(id)=>{
    console.log("in redirect");
    console.log(id);
    deleteBook(id);
    window.location.href=`/librarian/bookindex`

  }
  const [books, setBook] = useState([]);

   console.log("hi");

   console.log(books);

 useEffect(() => {
  getAllBooks().then((data) => {
    console.log(data);
          setBook(data.data );
      });
  }, []);

  const getRow = (book, index)=>{
    return (
        <tr key={index}>
           <td>{book.id}</td>
            <td>{book.bookname}</td>
            <td>{book.summary}</td>
            <td>{book.Author.firstname}  {book.Author.lastname}</td>
            <td>{book.Categorie.name}</td>
            <td>{book.availability}</td>
            <td> 
            <MDBBtn style={{height:"40px", width:"100px"}} color='danger'onClick={()=>redirect(book.id)}>Delete</MDBBtn></td>
        </tr>
    )
}
  return (
    <div>
      
      <MDBTypography tag='h4' style={{ textAlign: "center", marginTop: "20px" }}>Book List</MDBTypography>
      <MDBTable striped hover style={{ borderRadius: "7px", width: "1100px", marginTop: "50px", marginLeft: "100px", boxShadow: '2px 2px 2px #9a9a9a' }}>

        <MDBTableHead>
          <tr>
            <th scope='col'>BookId</th>
            <th scope='col'style={{width:'1000px'}}>Book Name</th>
            <th scope='col'style={{width:'800px'}}>Summary</th>
            <th scope='col'style={{width:'1000px'}}>Author</th>
            <th scope='col'style={{width:'800px'}}>Category</th>
            <th scope='col'style={{width:'800px'}}>Availability</th>
            <th scope='col' style={{width:'1000px', textAlign:'center'}}>Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
     
 {books.map(getRow)}



        </MDBTableBody>

      </MDBTable>
      
    </div>
  );
}
export default Books