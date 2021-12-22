import React from 'react';
import "./_Slider.scss"
import  proyect1 from "../../media/proyect1.png"
import  proyect2 from "../../media/proyect2.png"
import  proyect3 from "../../media/proyect3.png"
import  proyect4 from "../../media/proyect4.jpg"
import proyect5 from "../../media/proyect5.jpg"
import proyect6 from "../../media/proyect6.png"

const slidesInfo = [

   {
        src: proyect1,
        alt: "Proyect1",
        desc: "Repository: https://github.com/SaraMigoya/nodejs-api-ONG",
    },
    {
        src: proyect2,
        alt: "Proyect1",
        desc: "https://github.com/SaraMigoya/ProyectoGifos",
    },
    {
        src: proyect3,
        alt: "Proyect1",
        desc: "https://github.com/SaraMigoya/proyecto-netflix",
    },
    {
        src: proyect4,
        alt: "Proyect1",
        desc: "https://github.com/SaraMigoya/Delilah_Resto",
    },
    {
        src: proyect5,
        alt: "Proyect1",
        desc: "https://github.com/SaraMigoya/Data_wharehouse",
    },
    {
        src: proyect6,
        alt: "Proyect1",
        desc: "https://github.com/SaraMigoya/Data_wharehouse",
    },
    
];


const slides = slidesInfo.map((slide) => (
    <div className="slide-container">
      <img src={slide.src} className="slide-img" alt={slide.alt} />
      <div className="slide-desc">
        <span>{slide.desc}</span>
      </div>
    </div>
  ));

  export default slides;