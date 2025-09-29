import { useState } from 'react'

import axios from 'axios'
function ShopDetails() {
  const URL = "http://localhost:4000/owner/addShopDetails"
  const owner = JSON.parse(localStorage.getItem("owner"));
  const ownerID = owner._id;

  const [details, setDetails] = useState({ owner: ownerID, shopName: "", description: "", phone: "", city: "", address: ""})

  const [pic, setPic] = useState(null)
  function fetchData(e) {
      


    const { name, value , type , files} = e.target
    if(type === "file"){
      console.log(files[0]);
      setPic(files[0]);
      
    }else{
    setDetails({ ...details, [name]: value })

    }

  }

  async function submitData(e) {
    e.preventDefault()



    
              const formData = new FormData();
        for (const key in details) {
            formData.append(key, details[key]);  // to set all value from object
        }
        if (pic) {
            formData.append("pic", pic);
        }

        for(let [key,value] of formData.entries()){
          console.log(`${key}:`, value);
          
        }
  
       
      try{
      const serverResponse = await axios.post(URL, details)

      console.log(serverResponse.data.message);
      alert(serverResponse.data.message)
      setDetails({ owner: ownerID, shopName: "", description: "", phone: "", city: "", address: ""  });
      setPic(null)


    }
    catch (error) {
      console.log(error);

    }

  }//submit data closes

  return (
    <>
      <div className="main-div">
        <h1 style={{ textAlign: "center", fontFamily: "cursive", marginTop: "30px", fontWeight: "bold" }}>FILL YOUR SHOP DETAILS</h1>
        <div className="details-form">
          <form onSubmit={submitData} >


            <div className="form-floating mt-4">
              <input type="text" name="shopName" onChange={fetchData} value={details.shopName} className="form-control" id="floatingInput" placeholder="Enter Your Shop Name" required />
              <label htmlFor="SHOPNAME">Shop Name</label>
            </div>
            <div className="form-floating mt-4">
              <textarea className="form-control" name="description" onChange={fetchData} value={details.description} placeholder="Enter your description" id="ownerdescription" required></textarea>
              <label htmlFor="DESCRIPTION">Description</label>
            </div>

            <div className="form-floating mt-4">
              <input type="text" name="phone" onChange={fetchData} value={details.phone} className="form-control" id="floatingInput" placeholder="Enter Your Phone no." required />
              <label htmlFor="PHONE">Phone</label>
            </div>
            <div className="form-floating mt-4">
              <input type="text" name="city" onChange={fetchData} value={details.city} className="form-control" id="floatingInput" placeholder="Enter Your City" required />
              <label htmlFor="CITY" > <i className="fa-solid fa-city"></i>City</label>
            </div>

            <div className="form-floating mt-4">
              <textarea className="form-control" name="address" onChange={fetchData} value={details.address} placeholder="Enter your address" id="useraddress" required></textarea>
              <label htmlFor="Address"> <i className="fa-solid fa-location-dot"></i>Address</label>
            </div>

<br />
<br />
<input type="file" name='pic' onChange={fetchData} className='form-control' id='floatingInput' placeholder='Upload Your Pic' required />
<label htmlFor="PIC">Upload Your Pic</label>
            <div className="col-12 mt-4 mx-5">
              <button type="submit" className="btn btn-white" style={{ marginLeft: "20%" }}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default ShopDetails




