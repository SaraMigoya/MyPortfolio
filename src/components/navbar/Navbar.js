import React from 'react'
import "./_Navbar.scss"

 const Navbar = ({isScrolling}) => {
/*      const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      };  */
     
    return (
        <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`} >
            <div className="navbar-icons">
                <a href="https://github.com/SaraMigoya"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/sara-migoya/"><i class="fab fa-linkedin-in"></i></a>
            </div>
{/*             <div className="navbar-logo" onClick= {toTheTop}>
                </div> */}
            
        </nav>
    )
}

export default Navbar
