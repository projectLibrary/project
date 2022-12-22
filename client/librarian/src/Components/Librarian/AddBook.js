import React from "react";
import "./app.css";
import { addBook } from '../../Services/AddBookService';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";


function AddBook() {

    return (
    
        <div>
            <Formik
                initialValues={{
                    bookname: "",
                    firstname: "",
                    lastname: "",
                    summary: "",
                    category: "fantacy"
                }}
                validationSchema={yup.object({
                    firstname: yup.string().max(50).required("Name not valid"),
                    lastname: yup.string().max(50).required("Name not valid"),
                    bookname: yup.string().max(50).required("Please enter a Bookname"),
                    summary: yup.string().max(200).required("Please enter summary"),
                    category: yup.string().required()
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    console.log(values);
                    var res = await addBook(values);
                    // console.log(res);
                }}
                >
            
                {({isSubmitting})=>(
                <center>
                <Form>
                
                <div className="mainDiv1">
                    <h1>Add Book</h1>
                    <table>
                        <br></br>

                        <tr>
                            <td>
                                <div>
                                    <label>Book name</label>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <Field 
                                        type="textarea"
                                        name="bookname"
                                        placeholder="Book Name"
                                        class="form-control"
                                    />
                                    <ErrorMessage name="bookname" component="div" />
                                </div>

                                {/* /> */}
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>
                                <label>Author</label>
                            </td>
                            <td style={{ display: "flex" }}>
                                
                                {/* First Name */}
                                <Field
                                    type="textarea"
                                    name="firstname"
                                    placeholder="First Name"
                                    class="form-control"
                                />
                                &nbsp;
                                <ErrorMessage name="first" component="div" />
                                {/* Last name */}
                                <Field
                                    type="textarea"
                                    name="lastname"
                                    placeholder="Last Name"
                                    class="form-control"
                                />
                                <ErrorMessage name="lastname" component="div" />
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>
                                <label>Category </label>
                            </td>
                            <td>
                                <Field as="select" name="category">
                                    <option value="fantacy" selected>fantacy</option>
                                    <option value="fiction">fiction</option>
                                    <option value="horror">horror</option>
                                    <option value="biography">biography</option>
                                    <option value="literature">literature</option>
                                    <option value="romance novel">romance novel</option>
                                    <option value="mystery">mystery</option>
                                </Field>
                                <ErrorMessage name="category" component="div" />
                                {/* <select name="categoryname" className="form-control">
                                    <option value="fantacy">fantacy</option>
                                    <option value="fiction">fiction</option>
                                    <option value="horror">horror</option>
                                    <option value="biography">biography</option>
                                    <option value="literature">literature</option>
                                    <option value="romance novel">romance novel</option>
                                    <option value="mystery">mystery</option>
                                </select> */}
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td>
                                <label>summary</label>
                            </td>
                            <td>
                                <div>
                                    <Field
                                        type="textarea"
                                        name="summary"
                                        placeholder="Summary"
                                        class="form-control"
                                    />
                                    <ErrorMessage name="summary" component="div" />
                                </div>
                            </td>
                        </tr>
                        <br></br>
                        <tr>
                            <td></td>
                            <td>
                                <button
                                    className="button" type="submit" >
                                    submit
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>
                
            </Form>
            </center>
          
           )}
        </Formik>    
       </div> 
               
      );
}
export default AddBook;
// Formik and yup
