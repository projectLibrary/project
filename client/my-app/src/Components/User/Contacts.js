import {React, useState, useEffect} from 'react'
import { getAllBooks } from '../../Services/DisplayBooksService'

function Contacts() {

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getAllBooks().then((data) => {
            setContacts(data.data);
        });
    }, []);

    const getRow = (contact, index)=>{
        return (
            <tr key={index}>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
            </tr>
        )
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Contacts</h1>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(getRow)}
                </tbody>
            </table>
        </div>
    )
}

export default Contacts