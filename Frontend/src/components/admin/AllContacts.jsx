import axios from "axios"
import { useState, useEffect } from "react"
import ContactDetails from "./ContactDetails";


function AllContacts() {
    const [contact, setContact] = useState([]);


    const URL = "http://localhost:4000/admin/allContacts"
    const fetchData = async() => {

        try {

            const serverResponse = await axios.get(URL)
            console.log(serverResponse);
            setContact(serverResponse.data.contactDetails)


        } catch (err) {
            console.log(err);

        }
    }

    // useEffect calling
    useEffect(() => {
        


   fetchData()






    }, [])
    return (
        <>
            <h1>All contact details</h1>
            <ContactDetails contactArray={contact}/>
        </>
    )
}

export default AllContacts