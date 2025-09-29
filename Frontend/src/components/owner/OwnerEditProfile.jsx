import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import OwnerHeader from '../owner/OwnerHeader.jsx'
// import { json } from "express"







function OwnerEditProfile() {


    const storedData = JSON.parse(localStorage.getItem("owner"))
    const URL = "http://localhost:4000/owner/editProfile"

    const emailId = localStorage.getItem("emailKey")


    const navigate = useNavigate()
    const [oldData, setOldData] = useState({ name: storedData.name, city: storedData.city, address: storedData.address, phone: storedData.phone })




    const getData = (e) => {
        setOldData({ ...oldData, [e.target.name]: e.target.value })
    }





    const submitData = async (e) => {


        e.preventDefault()
        try {
            const params = { "email": emailId }
            const serverResponse = await axios.put(URL, oldData, { params })
            console.log(serverResponse);

            const serverMsg = serverResponse.data.updateStatus.acknowledged
            console.log(serverMsg);
            if(serverMsg === true)
                //   alert("profile updated successfully")

            navigate('/ownerHome')
            



        } catch (error) {
            console.log(error);

        }

    }



    return (
        <>


            <OwnerHeader />

            <h2 style={{ textAlign: "center" }}>Edit Profile</h2>

            <form onSubmit={submitData}>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                    <div style={{
                        width: "300px",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        padding: "20px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        backgroundColor: "#f9f9f9",
                        marginTop: "6%",
                        height: "300px"
                    }}>
                        <p>Name: <input type="text" name="name" value={oldData.name} required onChange={getData} className="form-control" /></p>
                        <p>City: <input type="text" name="city" value={oldData.city} required onChange={getData} className="form-control" /></p>
                        <p>Address: <input type="textarea" name="address" value={oldData.address} required onChange={getData} className="form-control" /></p>
                        <p>Phone:<input type="text" name="phone" value={oldData.phone} required onChange={getData}  className="form-control"/></p>
                    </div>
                </div>

                <div className="text-center">
                    <button className="btn btn-danger">Edit Profile</button>

                </div>

            </form>
        </>
    )
}
export default OwnerEditProfile