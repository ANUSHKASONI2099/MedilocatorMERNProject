import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from "axios"

function OwnerRegistration() {

    const [ownData, setOwnData] = useState({
        email: "",
        password: "",
        name: "",
        phone: "",
        city: "",
        address: ""
    })

    const [pic, setPic] = useState(null)

    const fetchData = (e) => {



        const { name, value, type, files } = e.target;  // destructuring target object
        if (type == "file") {
            console.log(files[0]);
            setPic(files[0]);  // it is an object

        } else {
            setOwnData({ ...ownData, [name]: value });
        }
    };  // close fetch data

    const submitData = async (e) => {

        e.preventDefault()

        // setting all data in formData object

        const formData = new FormData();
        for (const key in ownData) {
            formData.append(key, ownData[key]);  // to set all value from object
        }
        if (pic) {
            formData.append("pic", pic);
        }
        // for (let [key, value] of formData.entries()) {
        //     console.log(`${key}:`, value);

        // }
        const URL = "http://localhost:4000/owner/register"
        try {

            const serverResponse = await axios.post(URL, formData)
            console.log(serverResponse.data.message);

                setOwnData({
                email: "",
                password: "",
                name: "",
                phone: "",
                city: "",
                address: "",

            })
            setPic(null)
            
        } catch (err) {
            console.log(err);

        }
    } // close submit data



    return (

        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <img src="/favicon.png" alt="" style={{ width: "70px", height: "50px", borderRadius: "50%" }} />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"> Home </Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutus">AboutUs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactus">ContactUs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/findshop"> <i className="fa-solid fa-location-dot"></i>   Find Shop</Link>
                            </li>




                        </ul>

                    </div>
                </div>


            </nav>

            <div className="scroll-text-container">
                <div className="scroll-text">
                    Welcome to MediLocator – Your trusted medical store locator! 💊🩺 Find medicines and health services near you in seconds
                    | 💊 Locate trusted medical stores near you | 🆘 Emergency contacts now available on MediLocator

                </div>
            </div>

            <h1 style={{ textAlign: "center", fontFamily: "cursive", color: "black" , marginTop:"3%"}}>"Add Your Pharmacy to MediLocator’s Trusted Network" </h1>

            <div style={{ display: "flex" }}>

                <div style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', padding: '40px', flexWrap: 'wrap', marginLeft: "5%", marginTop: "5%" }}>
                    <div style={{ flex: '1', minWidth: '300px', maxWidth: '400px', padding: '20px', borderRadius: '15px', }}>
                      
                        <h5>
                            Join <strong>MediLocator</strong> and grow your medical store’s reach.
                        </h5>
                        <p>
                            Register today to make your pharmacy visible to nearby customers searching for medicines and healthcare services.
                        </p>
                        <h6>
                            Connect. Serve. Grow — with MediLocator. 🚀
                        </h6>

                    </div>
                </div>

                <form onSubmit={submitData} style={{ height: "740px", width: "600px", backgroundColor: "lightblue", padding: "4%", marginLeft: "9%", boxShadow: "5px 5px 5px grey", marginTop: "3%" }}>


                    <div className="input-group mb-3 w-75 mx-auto">
                        <span className="input-group-text"> <i className="fa-solid fa-envelope"></i> </span>
                        <input type="email" name="email" className="form-control" placeholder="Enter Email" value={ownData.email} onChange={fetchData} />
                    </div>
                    <br />
                    <div className="input-group mb-3 w-75 mx-auto">
                        <span className="input-group-text"> <i className="fa-solid fa-key"></i> </span>
                        <input type="password" name="password" className="form-control" placeholder="Enter password" value={ownData.password} onChange={fetchData} />
                    </div>
                    <br />
                    <div className="input-group mb-3 w-75 mx-auto">
                        <span className="input-group-text"> <i className="fa-regular fa-address-card"></i> </span>
                        <input type="text" name="name" className="form-control" placeholder="Enter Name" value={ownData.name} onChange={fetchData} />
                    </div>
                    <br />

                    <div className="input-group mb-3 w-75 mx-auto">
                        <span className="input-group-text">  <i className="fa-solid fa-phone"></i></span>
                        <input type="number" name="phone" className="form-control" placeholder="Enter phone number" value={ownData.phone} onChange={fetchData} />
                    </div>
                    <br />
                    <div className="input-group mb-3 w-75 mx-auto">
                        <span className="input-group-text">  <i className="fa-solid fa-location-dot"></i></span>
                        <input type="text" name="city" className="form-control" placeholder="Enter city" value={ownData.city} onChange={fetchData} />
                    </div>

                    <br />

                    <label htmlFor="imageUpload">Upload Image:</label>
                    <input type="file" id="imageUpload" name="pic" onChange={fetchData} />
                    <br />
                    <br />
                    <br />
                    <label htmlFor="address">Address:</label><br />
                    <textarea id="address" name="address" rows="4" cols="50" placeholder="Enter your address here" value={ownData.address} onChange={fetchData}></textarea>

                    <br />
                    <br />
                    <div className="text-center">
                        <button className="btn btn-danger">Submit</button>
                    </div>



                </form>


            </div>
            <footer className="footer  text-white py-3" style={{ marginTop: "38%" }}>
                <div className="container text-center">
                    <p className="mb-1">  <i className="fa-regular fa-copyright"></i> Facilitates. All rights reserved.</p>
                    <p className="mb-0">Contact: support@facilitates.com | Phone: +91-1234567890</p>
                </div>
            </footer>




        </>
    )
}

export default OwnerRegistration