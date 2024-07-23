
import playicon from "../assests-images/assets/play-button.png"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

{/*******************************************************
  To dyanamically update that gym is open or close***/}
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];


const Hero = () => {
  
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="container-fluid Hero">
            <div className="container gx-1">
              <div className="row gx-1">
                <div className="col-md-6">
                  <div className="Hero_col1"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing='ease-in-out'>
                    <h1>Real Fitness Solution</h1>
                    <h3>Start Your <span>Fitness</span> Journey With Us!</h3>
                    <p> Every workout takes you one step closer to your goals. <br></br>Push Your Limits! Join us today and start your transformation !</p>
                    <div className="Hero-buttons">
                      <button className="btn1 btn0  ">Get Started</button>
                      <button className="watch">
                        <img src={playicon} /> View Gallery
                      </button>
                      <br></br><br></br>
                      <div>
                        {
                        day==='Sunday' ? <h5 style={{color:"red"}}>✘ Close Today</h5> : <h5 style={{color:"green"}}>✔ Open Today: 5:00am to 10:00pm</h5>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="Hero_col2"></div>
                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>

        {/* ******************************************* */}

        <SwiperSlide>
          <div className="container-fluid Hero hero2">
            <div className="container gx-1">
              <div className="row gx-1">
                <div className="col-md-6"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing='ease-in-out'>
                  <div className="Hero_col1">
                    <h1>Real Fitness Solution</h1>
                    <h3>Start Your <span>Fitness</span> Journey With Us!</h3>
                    <p> Every workout takes you one step closer to your goals. <br></br>Push Your Limits! Join us today and start your transformation !</p>
                    <div className="Hero-buttons">
                      <button className="btn1 btn0 py-2 px31">Get Started</button>
                      <button className="watch">
                        <img src={playicon} /> View Gallery
                      </button>
                      <br></br><br></br>
                      <div>
                        {
                         day==='Sunday' ? <h5 style={{color:"red"}}>✘ Close Today</h5> : <h5 style={{color:"green"}}>✔ Open Today: 5:00am to 10:00pm</h5>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="Hero_col2"></div>
                </div>
              </div>
            </div>

          </div>

        </SwiperSlide>

        {/* ******************************************* */}

        <SwiperSlide>
          <div className="container-fluid Hero hero3">
            <div className="container gx-1">
              <div className="row gx-1">
                <div className="col-md-6"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing='ease-in-out'>
                  <div className="Hero_col1">
                    <h1>Real Fitness Solution</h1>
                    <h3>Start Your <span>Fitness</span> Journey With Us!</h3>
                    <p> Push Your Limits! Join us today and start your transformation !</p> <br></br>
                    <div className="Hero-buttons">
                      <button className="btn1 btn0 py-2 px31">Get Started</button>
                      <button className="watch">
                        <img src={playicon} /> View Gallery
                      </button>
                      <br></br><br></br>
                      <div>
                        {
                         day==='Sunday' ? <h5 style={{color:"red"}}>✘ Close Today</h5> : <h5 style={{color:"green"}}>✔ Open Today: 5:00am to 10:00pm</h5>
                        }
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="Hero_col1"></div>
                </div>
              </div>
            </div>

          </div>
        </SwiperSlide>

      </Swiper>

      {/* ******************************************* */}


    </>
  );

};

export default Hero;