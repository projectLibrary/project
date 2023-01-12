import { React, useState } from "react";

// import { Navigate } from "react-router-dom";
import "./register.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { register } from "../../services/accountsService";
import { useNavigate } from "react-router-dom";

function Register() {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const validateSchema = yup.object({
    firstname: yup.string().max(30).required("Name not valid"),
    email: yup.string().max(50).required("Email not valid"),
    password: yup.string().max(20).required("Password Invalid"),
    phone: yup
      .string()
      .max(10)
      .min(10)
      .required("Mobile number given is not valid"),
    address: yup.string().min(10).required("Address is not in proper format"),
    password: yup.string().min(8).required("Password is not valid"),
  });
  // Validation schema ends here....
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          firstname: "",
          lastname: "",
          address: "",
          phone: "",
        }}
        validationSchema={validateSchema}
        onSubmit={async (values, { setSubmitting }) => {
          var res = await register(values);
          navigate("/login");
          console.log(res);
          if (!res.success) {
            setErrors(res.errors);
            console.log("THis is res.errors", res.errors);
            // setErrors(res.errors);
            // console.log(errors);
          }
           if(res.success){
            alert("Success")
            console.log("Success")
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form class="logincontainer">
            <div>
              <Field
                type="textarea"
                name="firstname"
                placeholder="First Name"
                class="form-control"
              />
              <ErrorMessage name="firstname" component="div" />
              {/* 
              start
              */}

              {/* <h1>error {JSON.stringify(errors)}</h1> */}
              {/* end */}
            </div>
            <div>
              <br></br>
              <Field
                type="textarea"
                name="lastname"
                placeholder="Last Name"
                class="form-control"
              />
              <ErrorMessage name="lastname" component="div" />
            </div>

            <div>
              <br></br>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                class="form-control"
              />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <br></br>
              <Field
                type="password"
                name="password"
                placeholder="password"
                class="form-control"
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <br></br>
              <Field
                type="textarea"
                name="phone"
                placeholder="Phone Number"
                class="form-control"
              />
              <ErrorMessage name="phone" component="div" />
            </div>
            <div>
              <br></br>
              <Field
                type="textarea"
                name="address"
                placeholder="address"
                class="form-control"
              />
              <ErrorMessage name="address" component="div" />
            </div>
            <br></br>
            <center>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              {errors.length > 0 && (
                <div class="alert alert-danger" role="alert">
                  {errors &&
                    errors.map((item, key) => {
                      return <p key={key}>{item.msg}</p>;
                    })}
                </div>
              )}
            </center>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default Register;
