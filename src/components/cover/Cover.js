import React from 'react'

import "./_Cover.scss";

import coverImage from "../../media/coverImage.svg"


const Cover = () => {


    return (
        <div className="cover-container">
            
                <div className="cover-tile">
                    <h1 className="name"> Sara Migoya </h1>
         
                    <h2 className="ocupation">Fullstack Web Developer</h2>
                    <p className="sentence">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat mollitia dicta </p>

                </div>
                <img src={coverImage} alt="cover of portfolio" className="cover-img" />
    
        </div>
    );
};

export default Cover
