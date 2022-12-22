import './App.css';
import {Outlet, Link} from "react-router-dom";
import { Dropdown, DropdownButton } from 'react-bootstrap';

function App() {
  return (
    <>
      <header>
        <span>My Books</span>
        <nav>
          <Link to={'/librarian/bookIndex'}>Home</Link>
          {/* <Link to={'/about'}>Summary</Link> */} 
          <Link to={'/librarian/addBook'}>Add Books</Link>
          <Link to={'/librarian/users'}>All Users</Link>
          <Link to={'/librarian/feedback'}>Feedbacks</Link>
          <Link to={'/librarian/feedback'}>Logout</Link>
        <DropdownButton style={{ backgroundColor:"#282c34",color:"white", fontWeight:"bold", marginLeft:"20px",marginTop:"0px"}} title="Books">

        <Dropdown.Item key="1" style={{color:"black", backgroundColor:"#282c34", fontWeight:"bold"}}>
        <Link to={'/librarian/issuedbooks'}>Issued Books</Link>
        </Dropdown.Item>
        <Dropdown.Item key="2" style={{color:"black", backgroundColor:"#282c34", fontWeight:"bold"}}>
        <Link to={'/librarian/currentIssued'}>Current Issued Books</Link>
        </Dropdown.Item>
        </DropdownButton>

  
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      
    </>
  );
}

export default App;
