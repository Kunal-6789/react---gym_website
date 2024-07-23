import insta from "..//assests-images/assets/instagram.png"
import pin from "..//assests-images/assets/location.png"

const Contact = () => {
    return (
        <>

            <div className="container-fluid contact ">
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-md-7">
                            <div className="contact_col1 py-5"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-easing='ease-in-out'>
                                <h1> <span>Contact Us</span></h1>
                                <div className="py-3">
                                <h4>📞+91 9224356780</h4>
                                <h4>📧: real_Gym@gmail.com</h4>
                                <h4><img src={insta} alt="" className="icon" />real_fitness_solution</h4>
                                <h5><img src={pin} alt="" />First floor, Satkar Apartment, MIDC, Mumbai, 421200</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 py-5"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-easing='ease-in-out'>
                            <div className="reviews_col2">
                                <div className="row ">
                                    <div className="col-12">
                                        <div className="row gx-0">
                                        
                                            <form action="https://api.web3forms.com/submit" method="POST">
                                             <input type="hidden" name="access_key" value="b40db579-c0d3-43dc-96b8-d416cfa16b11"/>
                                                <div class="form-row">
                                                    <div class="form-group">
                                                        <label for="inputAddress">Name</label>
                                                        <input type="text" class="form-control" name="name" placeholder="Enter your name" required />
                                                    </div>
                                                    <div class="form-row">
                                                        <div class="form-group col-md-6">
                                                            <label for="inputCity">City</label>
                                                            <input type="text" class="form-control" name="city" placeholder="Enter your city" required />
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="inputEmail4">Email</label>
                                                        <input type="email" class="form-control" name="email" placeholder="Email" required />
                                                    </div>
                                                    <div class="form-group">
                                                    <label for="exampleFormControlTextarea1">Message</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="Enter your message"></textarea>
                                                    </div>
                                                    <br></br>
                                                    <button type="submit" class="btn btn-primary">Submit</button>
                                                </div>
                                                
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Contact;