import { Link } from 'react-router-dom'
import "../css/contactus.css"
import axios from "axios"
import swal from "sweetalert2"
import { useState } from "react"
import { FaHtml5 } from 'react-icons/fa'



const ContactUs = () => {

    const [contact, setContact] = useState({ name: "", email: "", phone: "", question: "" })
    const URL = "http://localhost:4000/addcontact"
    function fetchData(e) {
        setContact({ ...contact, [e.target.name]: e.target.value })
        console.log(contact);

    }
    async function submitData(e) {
        e.preventDefault()
        try {

            const serverResponse = await axios.post(URL, contact)
            console.log(serverResponse);

            swal.fire({
                title: "😎👍Contact Details",
                text: serverResponse.data.message,
                icon: "success"
            });
            setContact({ name: "", email: "", phone: "", question: "" })


        }
        catch (error) {
            console.log(error);

        }

    }


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
                            </li> <li className="nav-item">
                                <Link className="nav-link" to="/findshop"> <i class="fa-solid fa-location-dot"></i>   Find Shop</Link>
                            </li>


                        </ul>

                    </div>
                </div>


            </nav>
            {/* <h1 style={{ textAlign: "center", fontFamily: "cursive", color: "white" , marginTop:"3%"}}>Contact Now !!</h1> */}
   <div className="scroll-text-container">
                <div className="scroll-text">
                    Welcome to MediLocator – Your trusted medical store locator! 💊🩺 Find medicines and health services near you in seconds
                   | 💊 Locate trusted medical stores near you | 🆘 Emergency contacts now available on MediLocator

                </div>
            </div>

            <div style={{ display: "flex" }}>

                <div style={{
                    flex: '1',
                    minWidth: '300px',
                    maxWidth: '400px',
               
                    padding: '27px',
                    marginLeft:"8%",
                    marginTop:"5%"
             
          
                }}>
                    <h2 style={{ color: '#faf7f5ff' }}>Need Help?</h2>
                    <h6>
                        We're always here to assist you with your medical needs. Whether you're facing trouble finding a nearby shop, have questions about our services, or want to give suggestions — we’re all ears.
                    </h6>
                    <h6>
                        Fill out the form and we’ll get back to you as soon as possible. Your concern is important to us.
                    </h6>
                    {/* <p>
                        <strong>Office Hours:</strong> 9 AM – 6 PM (Mon–Sat)
                    </p> */}
                    <h5>
                        <strong>Email:</strong> support@medilocator.com
                    </h5>
                </div>

                <div style={{ width: "23%", marginLeft: "19%", marginTop: "7%", backgroundColor: "lightblue", height: "450px", padding: "20px", borderRadius: "15%", boxShadow: "5px 5px 5px 5px gray" }}>

                    <form onSubmit={submitData}>

                        <div className="input-group mb-3 w-75 mx-auto">
                            <span className="input-group-text"> <i className="fa-regular fa-address-card"></i> </span>
                            <input type="text" name="name" className="form-control" placeholder="Enter Name" onChange={fetchData} value={contact.name} />


                        </div>

                        <br />


                        <div className="input-group mb-3 w-75 mx-auto">
                            <span className="input-group-text"> <i className="fa-solid fa-envelope"></i> </span>
                            <input type="email" name="email" className="form-control" placeholder="Enter Email" onChange={fetchData} value={contact.email} />


                        </div>

                        <br />

                        <div className="input-group mb-3 w-75 mx-auto">
                            <span className="input-group-text"> <i className="fa-solid fa-phone"></i> </span>
                            <input type="number" name="phone" className="form-control" placeholder="Enter Phone Number" onChange={fetchData} value={contact.phone} />
                        </div>

                        <br />


                        <label htmlFor="address">Ask Question</label>

                        <textarea name="question" required className="form-control" placeholder="Ask Question" onChange={fetchData} value={contact.question}></textarea>


                        <br />

                        <div className="text-center">
                            <button className="btn btn-danger">Submit</button>
                        </div>



                    </form>
                </div>
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

export default ContactUs