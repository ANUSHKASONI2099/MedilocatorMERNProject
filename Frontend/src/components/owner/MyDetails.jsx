import { useState,useEffect } from "react"
import axios from "axios"
import OwnerHeader from "./OwnerHeader"
import '../../css/viewShop.css';
// import Footer from "../Footer"
import { Link } from "react-router-dom"
function MyDetails(){
    const URL = "http://localhost:4000/owner/myDetails"
    const [details,setDetails] = useState([])
    
  const owner=JSON.parse(localStorage.getItem("owner"))
    
    useEffect(()=>{
     async function fetchData(e) {
            try {
                // const params = {"email":emailId}
                const params = {"id":owner._id}

                const serverResponse = await axios.get(URL,{params})
                console.log(serverResponse);
                // console.log(details);
                
                const serverData = serverResponse.data.objectData
                console.log(serverData);
                setDetails(serverData)
            } catch (error) {
                console.log(error);
                
            }
        }

        fetchData();

    },[])
    return(
        <>
        <div className="main-div">
        <OwnerHeader/>
        <div className="flex-container">
            {
                 details.map((d)=>{
                    return(
                        <div className="card" key={d._id} >
                            <img src={`http://localhost:4000/shopPics/${d.pic}`} alt="" style={{height:"20px",width:"40px"}}/>
                            <div className="card-body">
                                <h5><b >Name: </b> {d.owner.name}</h5>
                                <h5><b>ShopName: </b> {d.shopName}</h5>
                              <h5><b>Description: </b> {d.description}</h5>
                                <h5><b>Phone: </b> {d.phone}</h5>
                                <h5><b>Address: </b> {d.address}</h5>
                                <h5><b>City: </b> {d.city}</h5>
                                <Link to="/addLocation" state={{detailsInfo:d}}>
                                <button className="location-btn">ADD LOCATION</button>
                                 </Link>
                                



                                </div>
                            </div>
                    )
                 })
            }
         </div>
         </div>
        {/* <Footer/> */}
        </>
    )
}
export default MyDetails