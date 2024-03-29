import React, { Component } from 'react';
import Slider from "react-slick";

export default class SimpleSlider extends Component {


    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 200,
            slidesToShow: 1,
            slidesToScroll: 1,
      
    
        };
        return (
            <div  className='slider-container'>
            <Slider {...settings}>
                <div className='slider_img' >
                    
                </div>
                <div className='slider_img2' >
                
                </div>
                <div className='slider_img3' >
               
                </div>
                <div className='slider_img4' >
               
                </div>
               
            </Slider>
            </div>
        );

    }
}
