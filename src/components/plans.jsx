

const plans = () =>{
    return(
        <>
        <div className="container-fluid plans">
            <div data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing='ease-in-out'>
            <h2>Start Your Journey Today With <span7>Real Fitness Solution</span7></h2>
            <h3>Choose The Best Plan</h3><hr></hr><br></br>
            </div>
            <div className="container">
                <div className="row gx-0">
                    <div className="col-md-4"
                     data-aos="fade-right"
                     data-aos-duration="1200"
                     data-aos-easing='ease-in-out'>
                        <div className="plan_col1">
                            <h4>Monthly</h4><hr></hr>
                            <h2><span3>Rs.</span3>499/-</h2>
                            <p>✔ Gym</p>
                            <button className="btn3">Choose Plan</button>
                        </div>
                    </div>
                    <div className="col-md-4 small-container"
                     data-aos="fade-up"
                     data-aos-duration="1200"
                     data-aos-easing='ease-in-out'>
                        <div className="plan_col2">
                            <h5>Most  Popular</h5>
                            <h4>Yearly</h4><hr></hr>
                            <h2><span3>Rs.</span3>4999/-</h2>
                            <p>✔ Gym</p>
                            <p>✔ Cardio</p>
                            <button className="btn4">Choose Plan</button>
                        </div>
                    </div>
                    <div className="col-md-4"
                     data-aos="fade-left"
                     data-aos-duration="1200"
                     data-aos-easing='ease-in-out'>
                        <div className="plan_col1">
                        <h4>Quaterly</h4><hr></hr>
                            <h2><span3>Rs.</span3>2999/-</h2>
                            <p>✔ Gym</p>
                            <button className="btn3">Choose Plan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}

export default plans;