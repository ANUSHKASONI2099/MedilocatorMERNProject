import axios from "axios"
import FeedbackDetails from "./FeedbackDetails"
import { useState, useEffect } from "react"

function AllFeedback() {
    const [feedback, setFeedback] = useState([])
    const URL = "http://localhost:4000/admin/allFeedbacks"
    const fetchData = async () => {
        try {
            const serverResponse = await axios.get(URL)
            console.log(serverResponse);
            setFeedback(serverResponse.data.FeedbackDetails)




        }
        catch (err) {
            console.log(err);

        }


    }
    useEffect(() => {
        fetchData()


    }, [])
    return (
        <>
            <FeedbackDetails feedbackArray={feedback} />
        </>
    )
}

export default AllFeedback