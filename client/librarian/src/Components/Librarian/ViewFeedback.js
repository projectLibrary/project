import React from 'react';
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBTypography,
  MDBBtn

} from 'mdb-react-ui-kit';
import {useState, useEffect} from 'react'
import { viewfeedback } from '../../Services/ViewFeedbackService'
function ViewFeedback() {
  const [feedbacks, setFeedback] = useState([]);


  console.log(feedbacks);

useEffect(() => {
  viewfeedback().then((data) => {
   console.log(data);
   setFeedback(data.data );
     });
 }, []);

 const getRow = (feedback, index)=>{
   return (
       <tr key={index}>
          <td>{feedback.id}</td>
           <td>{feedback.User.firstname}</td>
           <td>{feedback.User.lastname}</td>
           <td>{feedback.feedback}</td>
          
       </tr>
   )
}

  return (
    <div>
        <div class="table-responsive">
      <MDBTypography tag='h4' style={{ textAlign: "center", marginTop: "20px" }}>Feedbacks</MDBTypography>
      <MDBTable striped hover w-auto style={{ borderRadius: "7px", width: "980px", marginTop: "50px", marginLeft: "150px", boxShadow: '2px 2px 2px #9a9a9a' }}>

        <MDBTableHead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Feedback</th>   
          </tr>
        </MDBTableHead>
        <MDBTableBody>
        {feedbacks.map(getRow)}
        </MDBTableBody>
      </MDBTable>
      </div>
    </div>
  );
}
export default ViewFeedback;