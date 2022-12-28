import React from 'react';
import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBTypography,
    MDBDropdown


} from 'mdb-react-ui-kit';
import {useState, useEffect} from 'react'
import { allUsers } from '../../Services/UserService'

function Users() {
    const [users, setUser] = useState([]);

   console.log("hi");

   console.log(users);

 useEffect(() => {
    allUsers().then((data) => {
    console.log(data);
    setUser(data.data );
      });
  }, []);

  const getRow = (user, index)=>{
    return (
        <tr key={index}>
             <td>{user.id}</td>
           <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
          
        </tr>
    )
}
    return (
        <div>
            <MDBTypography tag='h4' style={{ textAlign: "center", marginTop: "20px" }}>Users List</MDBTypography>
            <MDBTable striped hover style={{ borderRadius: "7px", width: "660px", marginTop: "50px", marginLeft: "350px", boxShadow: '2px 2px 2px #9a9a9a' }}>

                <MDBTableHead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>First Name</th>
                        <th scope='col'>Last Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Phone</th>
                        <th scope='col'>Address</th>
                       
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                 {users.map(getRow)}
                </MDBTableBody>

            </MDBTable>
        </div>
    );
}
export default Users