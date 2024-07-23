


const prog = () => {
    return (
        <>
        <div className="prog">
            <div className="container-fluid">
                <div className="container">
                    <div className="row gx-0 py-3" data-aos="fade-down"
                        data-aos-duration="1000"
                        data-aos-easing='ease-in-out'>
                        <div className="col-md-7">
                            <span>Best Programs For You</span>
                        </div>
                        <div className="col-md-5">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum doloremque minima mollitia recusandae, eveniet accusantium dolorum excepturi rem eius.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ******************************************* */}
            <div className="row gx-0 py-4">
                <div className="col-md-3 strength"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-easing='ease-in-out'>
                    <div className="prog_col1">
                        <h3>Strength</h3>
                        <button>Learn More ➜</button>
                    </div>
                </div>
                <div className="col-md-3 yoga"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-easing='ease-in-out'>
                    <div className="prog_col1">
                        <h3 style={{ color: "black" }}>Yoga</h3>
                        <button>Learn More ➜</button>
                    </div>
                </div>
                <div className="col-md-3 body"
                    data-aos="fade-up"
                    data-aos-duration="1400"
                    data-aos-easing='ease-in-out'>
                    <div className="prog_col1">
                        <h3>Body Building</h3>
                        <button>Learn More ➜</button>
                    </div>
                </div>
                <div className="col-md-3 cardio"
                    data-aos="fade-up"
                    data-aos-duration="1600"
                    data-aos-easing='ease-in-out'>
                    <div className="prog_col1">
                        <h3 style={{ color: "black" }}>Cardio</h3>
                        <button>Learn More ➜</button>
                    </div>
                </div>
            </div>
        </div>    
            
        </>

    )
}

export default prog;