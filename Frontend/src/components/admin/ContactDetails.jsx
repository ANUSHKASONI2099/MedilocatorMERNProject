function ContactDetails({ contactArray }) {
    return (
        <>

            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>PhoneNumber</th>
                        <th>Question</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                               {
                        contactArray.map((contact) => {
                            return(
                                <tr key={contact._id}>
                                    <td>{contact.name}</td>
                                  <td>{contact.email}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.question}</td>
                                    <td>{contact.date}</td>

                                 



                                </tr>
                            )






                        })





                    }
          
                       
                </tbody>
            </table>
        </>
    )
}

export default ContactDetails