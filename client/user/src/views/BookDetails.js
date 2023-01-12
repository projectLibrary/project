import React from "react";
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

// reactstrap components
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBBtn,
  MDBRipple,
  MDBCardTitle,
  MDBCardText,
  MDBInput
} from "mdb-react-ui-kit";

import { useParams } from "react-router-dom";
import { getOneBookDetails, applyBook } from '../Services/BookApplyService';


function ApplyBook() {
  const [orderFor, setOrderFor] = useState("1");
  const [contacts, setContacts] = useState({});
  const params = useParams();
  const history = useHistory();

 async function saveBookRequest(e) {
    const result = await applyBook({
      userCategory: orderFor,
      bookId: params.id
    });
    console.log("hii",result);
    if (result.data.success) {
    alert("Applied successfully");
   
    }
    else {
      alert(result.data.errors[0]);
    }
    history.push('/admin/tables');
  }

  useEffect(() => {
    getOneBookDetails(params.id).then((data) => {
      console.log(data.data);
      setContacts(data.data.data);
    });
  }, []);

  console.log(params);
  return (
    <>
      <MDBCard style={{ width: "400px", marginLeft: "430px", marginTop: "70px", borderRadius: "30px" }}>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/02/attachment_80004080-e1488217702832.jpg?auto=format&q=60&fit=max&w=930' fluid style={{ width: "400px", height: "300px", borderRadius: "10px" }} />
          <a>
            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>{contacts.bookname}</MDBCardTitle>
          <MDBCardText>
            <MDBRow className='mb-4'>
              {/* <MDBCol>
              <label>Issued Date</label>    
              <input type='date' class="form-control" name='issuedDate' id='issuedDate' />
            </MDBCol> */}

            </MDBRow>
            <MDBRow className='mb-4'>
              <label>For whom?</label>
              <select class="form-select" aria-label="Default select example" name='userCategory' id='userCategory' rows={50} value={orderFor} onChange={(e) => {
                setOrderFor(e.target.value);
              }}>

                <option value="1">Self</option>
                <option value="2">Friend</option>
                <option value="3">Family</option>
              </select>
            </MDBRow>

          </MDBCardText>
          <MDBBtn
            style={{ height: "40px", width: "100px" }} onClick={saveBookRequest}>APPLY</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default ApplyBook;
