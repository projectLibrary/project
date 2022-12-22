import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from './Components/Public/About';
import Home from './Components/Public/Home';
import Feedback from './Components/Public/Feedback';
import Books from './Components/Librarian/Books';
import AddBook from './Components/Librarian/AddBook';
import Contacts from './Components/User/Contacts';
import Users from './Components/Librarian/Userlist';
import Issued from './Components/Librarian/Issued';
import ViewFeedback from './Components/Librarian/ViewFeedback';
import CurrentIssued from './Components/Librarian/CurrentIssued';
import Return from './Components/Librarian/Return';
import Latefee from './Components/Librarian/Latefee';


const router = createBrowserRouter([
  { path: "/", element: <App/>, children: [
    { path: "/", element: <Home/>},
    { path: "/about", element: <About/>},
    { path: "/feedback", element: <Feedback/>},
    
    
  ]},
 
  {
    path: '/user', element: <App/>, children: [
      { path: '/user', element: <Contacts/> },
    ]
  },
  {
    path: '/librarian', element: <App/>, children: [
      { path: '/librarian/users', element: <Users/> },
      { path: "/librarian/bookIndex", element: <Books/>},
      { path: "/librarian/addBook", element: <AddBook/>},
      { path: "/librarian/issuedbooks", element: <Issued/>},
      { path: "/librarian/currentIssued", element: <CurrentIssued/>},
      { path: "/librarian/feedback", element: <ViewFeedback/>},
      { path: "/librarian/returnBook/:id", element: <Return/>},
      { path: "/librarian/lateFee/:id", element: <Latefee/>},
      
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
