
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


 
let data = {
  name:"abishek",
  age:'21'
}

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
                <CardTitle tag="h5">Description</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                 
                  <Row>
                    
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Update Profile
                      </Button>
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
