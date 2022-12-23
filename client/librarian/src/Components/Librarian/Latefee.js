import React from 'react';
import "./app.css";
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";
import { lateFee, lateFeePost } from '../../Services/LateFeeService';
function Latefee() {
    const params = useParams();
    const [getFee, setgetFee] = useState([]);
    const [isPaid, setIsPaid] = useState('Yes');
    const parameters = useParams();
    // useEffect(() => {
    //     lateFee().then((data) => {
    //    console.log("Data->", data.data);
    //    setgetFee(data.data.data);
    //    console.log("GETFEE", getFee);
    //      });

    //  }, []);
    const navigate = useNavigate();
    async function lateFeeRequest(e) {
        e.preventDefault();    
        var dataToSend = {
            isPayed: isPaid,
            id: params.id
        };
        await lateFeePost(dataToSend);
        console.log("Hello");
        alert("Payed successfully");
        navigate(`/librarian/bookIndex`)
    }



    useEffect(() => {
        lateFee(params.id).then((data) => {
            console.log(data.data);
            setgetFee(data.data.data);
        });

    }, []);
    return (

        <>
            <form onSubmit={lateFeeRequest}>
                <div className="datee">
                    <h1>Late Fee Details</h1>
                    <table>
                        <div class="form-group row">
                            <label for="staticEmail" class="col-sm-2 col-form-label">LateFee </label>
                            <div class="col-sm-10">
                                <input type="text" value={getFee.fee} readonly class="form-control-plaintext" id="lateFee" className='form-control' />
                            </div>
                        </div>
                        <tr>
                            <select className='form-control' name='isPayed' id='isPayed' rows={50} value={isPaid} onChange={(e) => {
                                setIsPaid(e.target.value);
                            }}>
                                <option value="Yes">Paid</option>
                                <option value="No">Not Paid</option>
                            </select>


                        </tr>
                    </table>
                    <button className="button">Submit</button>
                </div>
            </form>
        </>

    );
}

export default Latefee;
