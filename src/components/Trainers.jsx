import img1 from "..//assests-images/assets/trainer1.jpg"
import img2 from "..//assests-images/assets/trainer2.jpg"
import img3 from "..//assests-images/assets/trainer3.jpg"
import insta from "..//assests-images/assets/instagram.png"


const Trainer=()=>{
    return(
        <>
        <div className="container-fluid trainer ">
            <div>
            <h1 className="text-center"data-aos="fade-down"
                     data-aos-duration="1100"
                     data-aos-easing='ease-in-out'style={{color:"var(--primary--color)"}}>Our Professional Trainers</h1>
            </div>
            <div className="container details"
            data-aos="fade-up"
            data-aos-duration="1100"
            data-aos-easing='ease-in-out'>
                <div className="row gx-0">
                    <div className="col-md-4 ">
                        <div className="trainer_col1 ">
                            <img src={img1} alt="" />
                            <h4>James Walker<span-p> (Age: 28)</span-p></h4><br></br>
                            <h6>Level 1 Certified Trianer by CISM</h6>
                            <h6><img src={insta} alt="" className="insta" />james_1_walker</h6>
                            
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="trainer_col1">
                            <img src={img3} alt="" />
                            <h4>Lily Scarlet<span-p> (Age: 25)</span-p></h4><br></br>
                            <h6>Level 2 Certified Trianer by CISM</h6>
                            <h6><img src={insta} alt="" className="insta"/>lily_scarlet_001</h6>
                            </div>
                        </div>
                    <div className="col-md-4">
                        <div className="trainer_col1">
                            <img src={img2} alt="" />
                            <h4>Jack Allen<span-p> (Age: 22)</span-p></h4><br></br>
                             <h6>Level 3 Certified Trianer by CISM</h6>
                             <h6><img src={insta} alt="" className="insta"/>jackkkk_123</h6>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Trainer;
