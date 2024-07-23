import img1 from "../assests-images/assets/partner1-zF7vbTNY.png"
import img2 from "../assests-images/assets/partner2-0v4I3E4H.png"
import img3 from "../assests-images/assets/partner3-1SbtTxdT.png"
import img4 from "../assests-images/assets/fitness1.jpeg"
import icon from "..//assests-images/assets/man.png"

const Fitness = () => {
    return (
        <>
            <div className="container-fluid Fitness">
                <div className="container">
                    <div className="row gx-0 align-items-center">
                        <div className="col-md-5">
                            <div className="fitness_col1">
                                <h1>Trusted Partners</h1>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="fitness_col2">
                                <img src={img1} alt="" className="img-fluid px-3" />
                                <img src={img2} alt="" className="img-fluid px-3" />
                                <img src={img3} alt="" className="img-fluid px-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/********************************************/}

            <div className="container-fluid Fitness1">
                <div className="container">
                    <div className="row gx-0 align-items-center">
                        <div className="col-md-6">
                            <div className="fitness_col3">
                                <img src={img4} alt="" className="img-fluid "
                                    data-aos="fade-right"
                                    data-aos-duration="800"
                                    data-aos-easing='ease-in-out' />
                                <div className="popup"
                                    data-aos="fade-right"
                                    data-aos-duration="800"
                                    data-aos-easing='ease-in-out'>
                                    <img src={icon} alt="" />
                                    <h5>Professional Trainers</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 fitness_col4"
                        >
                            <div>
                                <h1 className="ready"
                                    data-aos="fade-left"
                                    data-aos-duration="800"
                                    data-aos-easing='ease-in-out'>GET READY TO REACH YOUR FITNESS GOAL</h1>
                                <p data-aos="fade-left"
                                    data-aos-duration="1000"
                                    data-aos-easing='ease-in-out'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi nemo eos, eligendi sint tempora ad. Sint autem temporibus quos voluptatibus vel porro doloremque, consequuntur enim, dignissimos.</p>
                            </div>
                            <div className="free">
                                <div className="trial"
                                  data-aos="fade-left"
                                  data-aos-duration="1200"
                                  data-aos-easing='ease-in-out'>
                                    <form className="d-flex ms-md4" role="search">
                                     <button className="btn1 px-9" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"> Start Free Trial</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Fitness;