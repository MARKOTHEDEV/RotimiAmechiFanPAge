import React, { useState } from 'react'





const Nav=(props)=>{
    const [ham,setHam] = useState(false) 
    // console.log("From Nav",props.setShowRegisterForm(true))
    return (
        <header>
            <div className="header-area header-transparent" style={{display:"block"}}>
            <div className="main-header header-sticky">
            <div className="container">
            <div className="row align-items-center">

            <div className="col-xl-2 col-lg-2">
            <div className="logo">
            <a href="index-2.html"><img src="assets/img/logo/logo.png" alt=""/></a>
            </div>
            </div>
            <div className="col-xl-10 col-lg-10">

            <div className="main-menu f-right d-block d-lg-block" >
            <div className="hamBurgerICon" onClick={(e)=>setHam(!ham)}>
            {
                ham?
    <i class="fas fa-times"></i>
    :
<i class="fas fa-bars" ></i>
            }
                </div>
            <nav className={`markoNav ${ham?"showNav":""}`}>
                
            <ul id="navigation" style={{"position":"relative"}}>
            <li><a href="index-2.html">About Us</a></li>
            <li><a href="speakers.html">Meet Rotimi Amechi</a></li>
            {/* <li><a href="schedule.html">Schedule</a></li> */}
            <li><a href="location.html">Goal</a></li>
            {/* <li><a href="blog.html">Blog</a>
            <ul className="submenu">
            <li><a href="blog.html">Blog</a></li>
            <li><a href="blog_details.html">Blog Details</a></li>
            <li><a href="elements.html">Elements</a></li>
            </ul>
            </li> */}
            {/* <li><a href="contact.html">Contact</a></li> */}
            <li>
            <div className="header-right-btn f-right  ml-15 d-block d-xl-inline-block">
            <a 
            onClick={(e)=>{
                e.preventDefault();
                console.log("D")
                props.setShowRegisterForm(true)
            }}
            className="header-btn" style={{borderRadius:"10px"}}>Join Now<i className="ti-arrow-right"></i> </a>
            </div>
            </li>
            </ul>
            </nav>
            </div>
            </div>

            {/* <div className="col-12">
            <div className="mobile_menu d-block d-lg-none"></div>
            </div> */}
            </div>
            </div>
            </div>
            </div>
</header>
    )
}


export default Nav