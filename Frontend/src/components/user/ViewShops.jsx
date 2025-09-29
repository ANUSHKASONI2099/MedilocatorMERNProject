import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewShops() {
  const url = "http://localhost:4000/user/viewShops";
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serverResponse = await axios.get(url);
        console.log("Received:", serverResponse.data.objectData);
        setShops(serverResponse.data.objectData);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {shops.map((e) => (
        <div key={e._id} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
          <img src={`http://localhost:4000/shopPics/${e.pic}`} alt="" style={{height:"40px",width:"40px"}} />
          <h5><b>Name : </b> {e.owner.name}</h5>
          <h3>Shop Name: {e.shopName}</h3>
          <p>Address: {e.address}</p>
          <p>City: {e.city}</p>
          <p>Phone: {e.phone}</p>
                                <a href={`https://wa.me/+91${e.owner.phone}?text=}`}>  Talk with shop owner</a>


          {/* Example link with shop id
          <Link to="/addLocation" state={{ shopInfo: e._id }}>
            <button>Add Location</button>
          </Link> */}
        </div>
      ))}
    </>
  );
}

export default ViewShops;
