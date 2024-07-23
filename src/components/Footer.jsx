
import logo from "../assests-images/assets/logo_main-48JSqkPZ.png"
import img1 from "../assests-images/assets/instagram.png"
import img2 from "../assests-images/assets/facebook.png"
import img3 from "../assests-images/assets/twitter.png"


const Footer=()=>{
      return(
        <>
        <div className="container-fluid footer">
            <div className="container">
                <div className="row gx-0 py-2">
                    <div className="col-md-3 footer_col1 text-center">
                        <h5>Company</h5>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Why Us</a></li>
                            <li><a href="#">Partnership</a></li>
                            <li><a href="#">Security</a></li>
                        </ul>
                            

                    </div>
                    <div className="col-md-2 footer_col1 text-center">
                        <h5>Categories</h5>
                        <ul>
                            <li><a href="#">Yoga</a></li>
                            <li><a href="#">Body Building</a></li>
                            <li><a href="#">Cardio</a></li>
                            <li><a href="#">CrossFit</a></li>
                        </ul>
                            

                    </div>
                    <div className="col-md-2 footer_col1 text-center">
                        <h5>Help</h5>
                        <ul>
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Privacy Policies</a></li>
                            <li><a href="#">Conditions</a></li>
                        </ul>
                            

                    </div>
                    <div className="col-md-5 footer_col3 ">
                        <h5>Subscribe Our Newsletter</h5><br></br>
                        <h5> Thank You!</h5>
                        <br></br>
                        <div className="input-group mb-3">
  <input type="email" class="form-control" placeholder="Enter your message" ></input>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary" type="button">➤</button>
  </div>
</div>
                        
                    </div>
                    <hr></hr>
                    {/* ******************************************* */}
                    <div className="row gx-0 align-items-end">
                        <div className="col-md-3 ft-1 ">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="col-md-6 text-center">
                            <p>@2024 <strong>Kunal</strong> All Copyrights reserved.</p>
                        </div>
                        <div className="col-md-3 text-end" >
                            <img src={img2} alt="" className="facebook"/>
                            <img src={img1} alt="" className="instagram"/>
                            <img src={img3} alt="" className="tweet" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
      )
}

export default Footer;