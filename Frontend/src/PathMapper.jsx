import {BrowserRouter , Routes , Route} from "react-router-dom"
import App from "./App"

import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import FindShop from "./components/FindShop"
import Feedback from "./components/user/Feedback"
import AllContacts from "./components/admin/AllContacts"
import UserRegistration from "./components/user/User_Registration"
import OwnerRegistration from "./components/owner/Owner_Registration"
import AllFeedback from "./components/admin/AllFeedback"
import AdminLogin from "./components/admin/AdminLogin"
import UserLogin from "./components/user/UserLogin"
import OwnerLogin from "./components/owner/OwnerLogin"
import UserHome from "./components/user/UserHome"
import ShopDetails from "./components/owner/ShopDetails"
// import ViewDetails from "./components/user/ViewDetails"

import OwnerHome from "./components/owner/OwnerHome"
import AdminHome from "./components/admin/AdminHome"
import ViewShops from "./components/user/ViewShops"

import MyDetails from "./components/owner/MyDetails"
import OwnerEditProfile from "./components/owner/OwnerEditProfile"
import AddLocation from "./components/user/AddLocation"
import UserEditProfile from "./components/user/UserEditProfile"
import SearchShopsOnMap from "./components/user/SearchShopsOnMap"










function PathMapper(){
    return(
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<App/>} ></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/findshop" element={<FindShop/>}></Route>
        {/* <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route> */}
        <Route path="/addfeedback" element={<Feedback/>}></Route>
        <Route path="/allContacts" element={<AllContacts/>}></Route>
        <Route path="/allFeedbacks" element={<AllFeedback/>}></Route>

        <Route path="/userRegistration" element={<UserRegistration/>}></Route>
        <Route path="/ownerRegistration" element={<OwnerRegistration/>}></Route>
        <Route path="/adminLogin" element={<AdminLogin/>}></Route>
        <Route path="/userLogin" element={<UserLogin/>}></Route>
        <Route path="/ownerLogin" element={<OwnerLogin/>}></Route>
        <Route path="/userHome" element={<UserHome/>}></Route>
        <Route path="/addShopDetails" element={<ShopDetails/>}></Route>
        <Route path="/viewShops" element={<ViewShops/>}></Route>
        <Route path="/ownerHome" element={<OwnerHome/>}></Route>
        <Route path="/adminHome" element={<AdminHome/>}></Route>
        <Route path="/myDetails" element={<MyDetails/>}></Route>
        <Route path="/ownerEditProfile" element={<OwnerEditProfile/>}></Route>
        <Route path="/addLocation" element={<AddLocation/>}></Route>
        <Route path="/userEditProfile" element={<UserEditProfile/>}></Route>
        <Route path="/searchShop" element={<SearchShopsOnMap/>}></Route>
        <Route path="/adminHome" element={<AdminHome/>}></Route>



















     









        </Routes>
        
        </BrowserRouter>
        </>
    )
}

export default PathMapper