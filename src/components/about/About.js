import React from 'react'
import './_About.scss'


const About = ({isScrolling}) => {
    return (
      
        <div className={`about-container ${isScrolling > 250 ? "scrolling" : null}`} >

          <h3 className= "about-title">About me</h3>

          <div className ="underline"></div>

          <p className="about-p">
      
            Who I am? 👩🏼‍💻 
            Hi, I'm Sara and I'm a passionate developer My motivation is to learn and discover the world of web applications that are part of our day to day. As a full stack web developer, I am able to participate in all stages of development of an application, participating in the analysis, design, definition of the architecture and execution of test cases.
          </p>
          <p className="about-p">I have knowledge of data base SQL, MySql, Node Js, Express, Sequelize, Docker and also Handling of task management (Git, gitHub, Bitbucket) and documentation with Swagger. Especially, Ilove Analyze, design and implement database structures</p>

       
      </div>
    )
}

export default About
