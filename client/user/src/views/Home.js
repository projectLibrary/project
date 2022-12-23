import '../Public/Home.css';
import React from "react";
function Home() {
    return (
        <>
            <button class="button">Sign In</button>
            <img src="https://img.freepik.com/free-vector/book-readers-concept_74855-6263.jpg?w=996&t=st=1671530170~exp=1671530770~hmac=d54e9c35f5f9a9f23daef090c9ad8ec8d590358559d435e6fdf85a08e8f4fc78l" alt="" style={{ position: "absolute", marginLeft: "-100px", zIndex: '-1' }} />
            <div className="block">
                <h1>MyBook... <br /><span style={{ fontWeight: "bold", color: "#505f82" }}> Dive Deep Into The World Of Books..</span></h1>
                <p>“Clearly one must read every good book at least once every ten years.”
                    <br />― C.S. Lewis</p>
                <h3>Explore and borrow books through online.. </h3>
            </div>
        </>
    );
}
export default Home