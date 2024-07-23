
import img1 from "..//assests-images/assets/features.png"
import logo from "../assests-images/assets/logo_main-48JSqkPZ.png"

const features=() =>{
    return(
        <>
         <div className="container-fluid features">
            <div className="container">
                <div className="row gx-0 py-4">
                    <div className="col-md-6"
                    >
                        <div className="features_col1">
                            <h1 className="py-4"
                             data-aos="fade-right"
                             data-aos-duration="1000"
                             data-aos-easing='ease-in-out'>Why To Choose<br></br><span1> Real Fitness Solution</span1></h1>
                            <img src={logo}
                             data-aos="fade-right"
                             data-aos-duration="1000"
                             data-aos-easing='ease-in-out'/>
                            <div className="points"
                             data-aos="fade-right"
                             data-aos-duration="1000"
                             data-aos-easing='ease-in-out'>
                                <br></br> <br></br>
                                <h4>✔ Personal Training</h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                                <h4>✔ Flexible Time</h4> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                                <h4>✔ Proper Guidance</h4> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                                <h4>✔ Unisex Gym</h4> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6"
                     data-aos="fade-left"
                     data-aos-duration="1000"
                     data-aos-easing='ease-in-out'>
                        <div className="features_col2">
                            <img src={img1} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>

         </div>
        </>

    )
}

export default features;