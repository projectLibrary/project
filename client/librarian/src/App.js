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
          <button className="btn btn-success" onClick={() => {
          localStorage.removeItem("token");
          window.location.replace("/");
          }}>Logout</button>
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
      <div className="footer" style={{ position: "absolute", bottom: "0", textAlign: "end" }}>

        <img src="https://static.vecteezy.com/system/resources/previews/005/349/020/non_2x/horizontal-banner-with-childrens-and-books-boys-and-girls-are-standing-near-books-books-for-childrens-and-kids-i-love-reading-children-s-book-day-festival-poster-for-store-shop-library-vector.jpg" class="img-fluid" alt="" style={{ height: "100px", width: "900px", marginLeft:"300px" }} />

       

      </div>
      <main>
        <Outlet></Outlet>
      </main>
      
    </>
  );
}

export default App;
