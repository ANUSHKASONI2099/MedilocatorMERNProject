import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import OwnerHeader from '../owner/OwnerHeader.jsx'


// import { profile } from "../../../../../Backend/controller/ShopOwner_Controller.js"



function OwnerHome() {
  const URL = "http://localhost:4000/owner/ownerProfile"
  const emailId = localStorage.getItem("emailKey")

  const [profile, setProfile] = useState({ name: "", city: "", address: "", phone: "" })
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchData() {
      if (emailId === null) {
        navigate("/ownerLogin")
      }
      else {

        try {
          const params = { "email": emailId }
          const serverResponse = await axios.get(URL, { params })
          console.log(serverResponse.data.profileData);
          setProfile(serverResponse.data.profileData)//to set values in profile object
          localStorage.setItem("owner", JSON.stringify(serverResponse.data.profileData))


        } catch (error) {
          console.log(error);

        }
      }
    }
    fetchData()

  }, [])

 
  return (
    <>
 

      <OwnerHeader />
  
      <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
        <div style={{
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          backgroundColor: "#f9f9f9",
          marginTop:"6%",
          height:"300px"
        }}>
          <h2 style={{ textAlign: "center" }}>Owner Profile</h2>
          <img src={`http://localhost:4000/ownerPics/${profile.pic}`} alt="" style={{width:"50px",height:"50px"}}/>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>City:</strong> {profile.city}</p>
          <p><strong>Address:</strong> {profile.address}</p>
          <p><strong>Phone:</strong> {profile.phone}</p>
        </div>
      </div>

  
    </>
  )
}
export default OwnerHome


