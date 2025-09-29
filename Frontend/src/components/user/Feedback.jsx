import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from "axios"
import swal from "sweetalert2"
import { FaStar } from 'react-icons/fa'




// function Feedback() {
// const [feedback, setFeedback] = useState({ name: "", email: "", rating: "", remark: "" })
// const URL = "http://localhost:4000/user/addfeedback"
// function fetchData(e) {
// setFeedback({ ...feedback, [e.target.name]: e.target.value })
// console.log(feedback);
// }
// async function submitData(e) {
// e.preventDefault()
// try {
// const serverResponse = await axios.post(URL, feedback)
// console.log(serverResponse);

// swal.fire({
// title: "😎👍Feedback Details",
// text: serverResponse.data.message,
// icon: "success"
// });
// setContact({ name: "", email: "", rating: "", remark: "" })
// }
// catch (error) {
// console.log(error);
// }
// }

function Feedback() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);
    const [feedback, setFeedback] = useState({ name: "", email: "", rating: "", remark: "", date: "" });
    const handleRatingChange = (value) =>{
       setRating(value);
       setFeedback({...feedback, rating: value})
       console.log(value);
       
    }
    const URL = "http://localhost:4000/user/addfeedback"
    function fetchData(e) {
        setFeedback({ ...feedback, [e.target.name]: e.target.value })
        console.log(feedback);

    }
    async function submitData(e) {
        e.preventDefault();
        try {


            const serverResponse = await axios.post(URL, feedback)
            console.log(serverResponse);

            swal.fire({
                title: "😎👍Feedback Details",
                text: serverResponse.data.message,
                icon: "success"
            });
            setFeedback({ name: "", email: "", remark: "", rating: "", date: "" })

        } catch (err) {
            console.log(err);


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
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/findshop"> <i className="fa-solid fa-location-dot"></i>   Find Shop</Link>
                            </li>




                        </ul>

                    </div>
                </div>


            </nav>
            {/* <h1 style={{ textAlign: "center", fontFamily: "cursive", color: "white" }}>We value Your FeedBack !!</h1> */}
            <div className="scroll-text-container">
                <div className="scroll-text">
                    Welcome to MediLocator – Your trusted medical store locator! 💊🩺 Find medicines and health services near you in seconds
                    | 💊 Locate trusted medical stores near you | 🆘 Emergency contacts now available on MediLocator

                </div>
            </div>
            <div style={{ display: "flex" }}>
                <div style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', padding: '40px', flexWrap: 'wrap', marginLeft: "5%", marginTop: "5%" }}>
                    <div style={{ flex: '1', minWidth: '300px', maxWidth: '400px', padding: '20px', borderRadius: '15px', }}>
                        <h2 style={{ color: 'white' }}>Why Your Feedback Matters</h2>
                        <h5>
                            We at <strong>MediLocator</strong> aim to make your medical needs more accessible.
                        </h5>
                        <p>
                            Your suggestions help us grow and improve our services.
                        </p>
                        <h6>
                            Thanks for taking the time to rate us 😍😍!
                        </h6>
                    </div>
                </div>
                <div style={{ width: "23%", marginLeft: "19%", marginTop: "7%", backgroundColor: "lightblue", height: "500px", padding: "20px", borderRadius: "15%", boxShadow: "5px 5px 5px 5px gray" }}>
                    {/* <form onSubmit={submitData}> */}
                    <form >


                        <div className="input-group mb-3 w-75 mx-auto">
                            <span className="input-group-text"> <i className="fa-regular fa-address-card"></i> </span>
                            <input type="text" name="name" className="form-control" placeholder="Enter Name" onChange={fetchData} value={feedback.name} />


                        </div>

                        <br />


                        <div className="input-group mb-3 w-75 mx-auto">
                            <span className="input-group-text"> <i className="fa-solid fa-envelope"></i> </span>
                            <input type="email" name="email" className="form-control" placeholder="Enter Email" onChange={fetchData} value={feedback.email} />


                        </div>


                        <div style={{ padding: '20px' }}>
                            <h2>Rate us:</h2>
                            <div style={{ display: 'flex', gap: '5px', fontSize: '30px', cursor: 'pointer' }}>
                                {[...Array(5)].map((_, index) => {
                                    const currentRating = index + 1;
                                    return (
                                        <label key={index}>
                                            <input type="radio" name="rating"   style={{ display: 'none' }}    onClick={()=>handleRatingChange(currentRating)}/>
                                            <FaStar
                                                color={currentRating <= (hover || rating) ? "#e9ed1dff" : "#e4e5e9"}
                                                onMouseEnter={() => setHover(currentRating)}
                                                onMouseLeave={() => setHover(null)}
                                                size={30}
                                              
                                            />
                                        </label>
                                    );
                                })}
                            </div>
                            <p>Your rating: {rating} star{rating > 1 ? 's' : ''}</p>
                        </div>

                        <label htmlFor="remark">Remark</label>
                        <textarea name="remark" required className="form-control" placeholder="Remark" onChange={fetchData} value={feedback.remark}></textarea>



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
export default Feedback

