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
import {useState, useEffect} from 'react'

import { getMyBook } from '../Services/MyBookService'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

function Tables() {
  const [contacts, setContacts] = useState([]);
  // console.log("hi");
  // console.log(contacts);
 useEffect(() => {
  getMyBook().then((data) => {
    console.log(data);
          setContacts(data.data.data);
      });
  }, []);
  const getRow = (contact, index)=>{
    return (
        <tr key={index}>
            <td>{contact.bookname}</td>
            <td>{contact.issuedDate}</td>
            <td>{contact.returnDate}</td>
            {/* <td>{contact.phone}</td> */}

        </tr>

    )

}

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">My Book List</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th> Book Name</th>
                      <th>Issued Date</th>
                      <th>Return Date</th>
                      <th className="text-right">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                  {contacts.map(getRow)}
                   
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
    </>
  );
}

export default Tables;
