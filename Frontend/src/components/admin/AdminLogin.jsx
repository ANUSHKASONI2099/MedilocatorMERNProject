import Header from "../Header"
import Footer from "../Footer"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

function AdminLogin() {

    const navigate = useNavigate()
    const [adminLogin, setAdminLogin] = useState({ email: "", password: "" })
    const URL = "http://localhost:4000/admin/adminLogin"
    function fetchData(e) {
        setAdminLogin({ ...adminLogin, [e.target.name]: e.target.value })
        console.log(adminLogin);

    }


    const submitData = async (e) => {
        e.preventDefault()

        try {

            // console.log("ownerlogin:",ownerLogin);

            const serverResponse = await axios.post(URL, adminLogin)
            console.log(serverResponse.data);
            const status = serverResponse.data.status
            if (status == "success") {
                // alert("login successful")


                localStorage.setItem("emailKey", serverResponse.data.token)

                navigate("/adminHome")  // login krne ke badd home pe jana
            }
            else {
                // alert("Invalid Credentials")
                Swal.fire({
                    title: "Login Details",
                    text: serverResponse.data.status,
                    icon: "error"
                });
            }

        } catch (error) {

            console.log(error);

        }




    }



    return (

        <>
            <Header />
            <div style={{ display: "flex" }}>
                <div style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', padding: '40px', flexWrap: 'wrap', marginLeft: "5%", marginTop: "5%" }}>
                    <div style={{ flex: '1', minWidth: '300px', maxWidth: '400px', padding: '20px', borderRadius: '15px', }}>
                        <h2>Admin Portal Login</h2>
                        <h6>Enter your credentials to oversee store activity, user feedback, and system operations across MediLocator. 😍👍</h6>

                    </div>
                </div>
                <div style={{ width: "23%", marginLeft: "9%", marginTop: "7%", backgroundColor: "lightblue", height: "250px", padding: "20px", borderRadius: "15%", boxShadow: "5px 5px 5px 5px gray" }}>

                    <form onSubmit={submitData}>

                        <div className="input-group mb-3 w-75 mx-auto">
                            <span className="input-group-text"> <i className="fa-solid fa-envelope"></i>  </span>
                            <input type="text" name="email" className="form-control" placeholder="Enter Email" onChange={fetchData} value={adminLogin.email} />


                        </div>

                        <br />


                        <div className="input-group mb-3 w-75 mx-auto">
                            <span className="input-group-text">  </span>
                            <input type="password" name="password" className="form-control" placeholder="Enter Password" onChange={fetchData} value={adminLogin.password} />
                        </div>


                        <br />

                        <div className="text-center">
                            <button className="btn btn-danger">Submit</button>
                        </div>


                    </form>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default AdminLogin