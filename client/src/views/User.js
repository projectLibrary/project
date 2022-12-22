
import React from "react";
import {useState, useEffect} from 'react'

import { getUserProfile } from '../Services/ProfileService'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";


function User() {
  const [contacts, setContacts] = useState([]);

 useEffect(() => {
  getUserProfile().then((data) => {
    console.log(data);
          setContacts(data.data.data);
      });
  }, []);


  return (
    <>
      <div className="content">
        <Row>
         
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Profile</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                 
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>First Name :</label>
                        <Input
                          placeholder="First Name"
                          type="text"
                          value= {contacts.firstname}
                        />
                      
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          placeholder="Last Name"
                          type="text"
                          value={contacts.lastname}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                   
                   
                   <Col className="pl-2" md="6">
                     <FormGroup>
                       <label htmlFor="exampleInputEmail1">
                         Email address
                       </label>
                       <Input placeholder="Email" type="email" value={contacts.email}/>
                     </FormGroup>
                   </Col>
                   <Col className="pl-2" md="6">
                     <FormGroup>
                       <label htmlFor="exampleInputEmail1">
                         Phone number
                       </label>
                       <Input placeholder=" Phone number"  type="text" value={contacts.phone} />
                     </FormGroup>
                   </Col>
                 </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          defaultValue="Melbourne, Australia"
                          placeholder="Home Address"
                          type="text"
                          value={contacts.address}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                 
                  <Row>
                    <div className="update ml-auto mr-auto">
                      {/* <Button
                        className="btn-round"
                        color="primary"
                        type="submit" >
                        Update Profile
                      </Button> */}
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;
