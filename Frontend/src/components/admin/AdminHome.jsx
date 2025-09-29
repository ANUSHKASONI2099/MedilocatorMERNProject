import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import AdminHeader from '../admin/AdminHeader.jsx'


// import { profile } from "../../../../../Backend/controller/ShopOwner_Controller.js"



function AdminHome() {
  const URL = "http://localhost:4000/admin/adminProfile"
  const emailId = localStorage.getItem("emailKey")

  const [profile, setProfile] = useState({ name: "", phone: "" })
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchData() {
      if (emailId === null) {
        navigate("/adminLogin")
      }
      else {

        try {
          const params = { "email": emailId }
          const serverResponse = await axios.get(URL, { params })
          console.log(serverResponse.data.profileData);
          setProfile(serverResponse.data.profileData)//to set values in profile object
          localStorage.setItem("admin", JSON.stringify(serverResponse.data.profileData))


        } catch (error) {
          console.log(error);

        }
      }
    }
    fetchData()

  }, [])

 
  return (
    <>
 

      <AdminHeader />
  
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
          <h2 style={{ textAlign: "center" }}>Admin Profile</h2>
          <p>Name:{profile.name}</p>
          
          <p><strong>Phone:</strong> {profile.phone}</p>
        </div>
      </div>

  
    </>
  )
}
export default AdminHome