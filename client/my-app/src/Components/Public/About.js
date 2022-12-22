import React from 'react';
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

function About() {
  return (
    <MDBCard style={{ borderRadius: "15px", width:"660px", marginTop:"60px", marginLeft:"350px", boxShadow: '1px 2px 9px #9a9a9a'}}>
      <MDBCardHeader style={{fontSize:"18px", fontWeight:"bolder", fontFamily:"sans-serif"}}>Summary</MDBCardHeader>
      {/* <MDBCardBody style={{ height: "400px" }}> */}
      <MDBCardBody style={{ height: "400px" }}>
        <MDBCardTitle>Book Name</MDBCardTitle>
        <MDBCardText>With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.With supporting text below as a natural lead-in to additional content.
        </MDBCardText>
      </MDBCardBody>
      <MDBBtn href='#' style={{ width: "150px", marginLeft: "490px"}}>Book Now</MDBBtn>
    </MDBCard>
  );
}
export default About