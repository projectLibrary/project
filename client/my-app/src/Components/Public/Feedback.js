import React from 'react';
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

function About() {
    return (
        <MDBCard style={{ borderRadius: "15px", width: "660px", marginTop: "60px", marginLeft: "350px", boxShadow: '5px 5px 9px #9a9a9a'}}>
         
            {/* <MDBCardBody style={{ height: "400px" }}> */}
            <MDBCardBody style={{ height: "470px" }}>
                <MDBCardTitle> Send us your Feedback</MDBCardTitle> <br/>
                <MDBCardText>
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

                </MDBCardText>
                <label>Comments</label>
                <MDBTextArea wrapperClass='mb-4' name='feedback' id='feedback' rows={10}  />
            </MDBCardBody>
            <MDBBtn href='#' style={{ width: "150px", marginLeft: "490px", marginBottom:"20px" }}>Submit</MDBBtn>
        </MDBCard>
    );
}
export default About