/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { useState, useEffect } from 'react'

import { feedbackCreate } from '../Services/FeedbackService'
import {
  MDBCard,

  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextArea
} from 'mdb-react-ui-kit';


function Typography() {
  const [feedback, setFeedback] = useState("");
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Give your feedback</h5>

              </CardHeader>
              <CardBody>

                <MDBCard style={{ borderRadius: "15px", width: "660px", marginTop: "60px", marginLeft: "350px", boxShadow: '1px 2px 9px #9a9a9a' }}>

                  {/* <MDBCardBody style={{ height: "400px" }}> */}
                  <MDBCardBody style={{ height: "470px" }}>
                    <MDBCardTitle> Send us your Feedback</MDBCardTitle> <br />
                    {/* <MDBCardText>
                 <MDBRow className='mb-4'>
                     <MDBCol>
                         <label>First Name</label>
                         <MDBInput  name='firstname' id='firstname' readonly />
                     </MDBCol>
                     <MDBCol>
                     <label>Last Name</label>
                         <MDBInput name='lastname' id='lastname' readonly/>
                     </MDBCol>
                 </MDBRow>

             </MDBCardText> */}
                    <label>Comments</label>
                    <MDBTextArea wrapperClass='mb-4' name='feedback' id='feedback' rows={50} value={feedback} onChange={(e) => {
                      setFeedback(e.target.value);
                    }} />
                  </MDBCardBody>
                  <MDBBtn style={{ width: "150px", marginLeft: "490px", marginBottom: "10px" }} onClick={()=>{
                    feedbackCreate({feedback: feedback}).then(res=>{
                    alert("Feedback submitted successfully");
                    });
                  }}>Submit</MDBBtn>
                </MDBCard>


              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Typography;
