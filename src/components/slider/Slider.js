import React from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from "./Slides";
import "./_Slider.scss"

const Slider = () => {
    return (
        <div className="carousel-container">

            <h2 className="carousel-title">My projects</h2>
            <div className="underline"></div>
                <div className="slider-container-general">

           
                <Carousel
                    plugins={[
    
                        "arrows"
                    ]}
                  // slidesPerPage={}
                    infinite
                    animationSpeed={200}
                    centered
                    //offset={50}
                   // itemWidth={400}
                    slides={Slides}
    
                />
                     </div>

        </div>
    )
}

export default Slider
