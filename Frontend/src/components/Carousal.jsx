import '../css/Carousal.css'

function Carousal() {

    



    return (
        <>

        
           <div style={{display:"flex"}}>
                <div id="carouselExample" className="carousel slide" style={{width:"50%" , marginLeft:"5%" , marginTop:"4%" , boxShadow:"5px 5px 8px grey"}}>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/image1.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/image2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="/image3.png" className="d-block w-100" alt="..." />
                        </div>
                         <div className="carousel-item">
                            <img src="/image4.png" className="d-block w-100" alt="..." />
                        </div> <div className="carousel-item">
                            <img src="/image5.png" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                  
                </div>

                  <div style={{marginLeft:"14%" , height:"200px" , width:"200px"}}>
                        <img src="/doctor.png" alt="" />
                    </div>

          </div>

        </>



    )





}

export default Carousal