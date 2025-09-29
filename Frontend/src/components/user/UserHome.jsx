import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import UserHeader from '../user/UserHeader.jsx'



function UserHome(){
     const URL="http://localhost:4000/user/userProfile"
    const emailId=localStorage.getItem("emailKey")

    const[profile,setProfile]=useState({name:"",city:"",address:"",phone:"",pic:""})
    const navigate= useNavigate()
    useEffect(()=>{
      async function fetchData(){
        if(emailId === null){
         navigate("/userLogin")
        }
        else{ 

        try {
            const params={"email":emailId} 
          const serverResponse= await  axios.get(URL,{params})
          console.log(serverResponse.data.profileData);
          setProfile(serverResponse.data.profileData)//to set values in profile object
          localStorage.setItem("user",JSON.stringify(serverResponse.data.profileData))
          

        } catch (error) {
            console.log(error);
            
        }
      }
    }
      fetchData()

    },[])
    return(
        <>
        <div className="main-div">

        <UserHeader/>
         <div className="box-card" style={{marginTop:"9%",marginLeft:"40%"}}>
 
          <div  className="card" style={{width: "300px",height:"500px"}}>

                <img src={`http://localhost:4000/profilePics/${profile.pic}`} style={{width:"290px" , height:"290px"}} alt="..."/>
                 

            <h5  className="card-title" style={{textAlign:"center",fontWeight:"bold",fontSize:"30px"}}>User Details</h5>

         <div  className="card-body" style={{fontFamily:"cursive"}}>
               <h5 className="card-title" >Name:{profile.name}</h5>
           <h5 className="card-title"> Phone:{profile.phone}</h5>
           <h5 className="card-title"> City:{profile.city}</h5>
           <h5 className="card-title"> Address:{profile.address}</h5>
             </div>
             
             </div>
                </div>
            

</div>
  
        </>
    )
}
export default UserHome