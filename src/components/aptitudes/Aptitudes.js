import React from 'react'
import './_Aptitudes.scss'
import express from '../../media/express.png'

const Aptitudes = ({isScrolling}) => {
    return (
        <div className={`aptitudes-container ${isScrolling > 300 ? "scrolling" : null}`}>
            <h3 className="aptitudes-title">Skills</h3>
            <div className="underline"></div>
            <div className="aptitudes-icons">
                <i class="html fab fa-html5" ></i>
                <i class=" css fab fa-css3-alt" ></i>
                <i class=" sass fab fa-sass" ></i>
                <i class=" js fab fa-js-square" ></i>
                <i class="react fab fa-react" ></i>
                <i class="git fab fa-git" ></i>
                <i class="node fab fa-node" ></i>
                <i class="fab fa-aws"></i>
                <i class="fab fa-docker"></i>
                <i class="fas fa-database"></i>
                <img src={express} alt="icon express" className="express icons"/>
            </div>

        </div>
    )
}

export default Aptitudes
