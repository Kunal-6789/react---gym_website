import img1 from "..//assests-images/assets/test2-l2o90d0E.jpg";
import img2 from "..//assests-images/assets/builder.jpg";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { Autoplay , EffectCreative } from 'swiper/modules';
const reviews=()=>{
    return(
      <>
        <div className="container-fluid reviews py-5">
          <div className="container">
            <div className="row gx-0">
              <div className="col-md-7">
                <div className="reviews_col1">
                  <h1>Get The Reviews Of Our <span-member>Happy Members</span-member></h1>
                  <h4>200+ Reviews</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Libero, vero excepturi fugiat provident vitae sint possimus, consectetur harum.</p>   
                  <h7 className="star star-rate"> <span-overall>Ratings</span-overall> ★★★★☆</h7>
                </div>
              </div>
              <div className="col-md-5"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-easing='ease-in-out'>
                <div className="reviews_col2">
                  <Swiper
                    grabCursor={true}
                    effect={'creative'}
                    creativeEffect={{
                      prev: {
                        shadow: true,
                        translate: ['-120%', 0, -500],
                      },
                      next: {
                        shadow: true,
                        translate: ['120%', 0, -500],
                      },
                    }}
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay,EffectCreative]}
                    className="mySwiper2"
                  >
                    <SwiperSlide>
                      <div className="row ">
                        <div className="col-12">
                          <div className="row gx-0">
                            <div className="col-md-4 text-center">
                              <img src={img1} alt="" className="img-fluid" />
                            </div>
                            
                            <div className="col-md-8">
                              <h4>Kunal Sharma</h4>
                              <p>Happy Member</p>
                              <h3 className="star">★★★★☆</h3>
                            </div>
                            <p className="p2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident libero, nam, omnis laboriosam </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="row ">
                        <div className="col-12">
                          <div className="row gx-0">
                            <div className="col-md-4 text-center">
                              <img src={img2} alt="" className="img-fluid" />
                            </div>
                            
                            <div className="col-md-8">
                              <h4>Ameya Redkar</h4>
                              <p>Happy Member</p>
                              <h3 className="star">★★★☆☆</h3>
                            </div>
                            <p className="p2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident libero, nam, omnis laboriosam </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  
                     <SwiperSlide>
                      <div className="row ">
                        <div className="col-12">
                          <div className="row gx-0">
                            <div className="col-md-4 text-center">
                              <img src={img1} alt="" className="img-fluid" />
                            </div>
                            
                            <div className="col-md-8">
                              <h4>Hemant Dada</h4>
                              <p>Happy Member</p>
                              <h3 className="star">★★★★★</h3>
                            </div>
                            <p className="p2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident libero, nam, omnis laboriosam </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  
                  
                  </Swiper>

                </div>
              </div>
            </div>
          </div>
        </div>
        </>

    )
}

export default reviews;