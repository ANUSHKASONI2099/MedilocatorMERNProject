function FeedbackDetails({ feedbackArray }) {
    return (
        <>

            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Rating</th>
                        <th>Remark</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                               {
                        feedbackArray.map((feedback) => {
                            return(
                                <tr key={feedback._id}>
                                    <td>{feedback.name}</td>
                                  <td>{feedback.email}</td>
                                    <td>{feedback.rating}</td>
                                    <td>{feedback.remark}</td>
                                    <td>{feedback.date}</td>

                                 



                                </tr>
                            )






                        })





                    }
          
                       
                </tbody>
            </table>
        </>
    )
}

export default FeedbackDetails