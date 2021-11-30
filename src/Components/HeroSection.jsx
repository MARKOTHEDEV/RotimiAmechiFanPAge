import RotimiImageHeroEction from "../assets/img/rotimi/rotminHero.png.webp"
import ApcLogo from "../assets/img/rotimi/apcImage.webp"

const HeroSection =(props)=>{

// place for news and events
// NETwork->nav 
    // state chapters
        // list of table
        // serialNO. state curdinator link-toJoin
        
    // other organization

    return (
        <section className="slider-area">
<div className="slider-active">
<div className="single-slider  slider-height hero-overly slider-bg1 d-flex align-items-center"

style={{backgroundImage:`url(${RotimiImageHeroEction}) `}}>
<div className="container position-relative">
<div className="row" style={{
    // 'border':"1px solid red",
    "position":"relative"}}>
            <div className="col-xxl-5 col-xl-4 col-lg-6 col-md-8 col-sm-10">
            <div className="hero-caption">
            <h1 ><span>Rotimi</span> Amaechi</h1>

            <div className="video-icon">
            <a className="popup-video btn-icon" href="">
                {/* <i className="fas fa-play"></i> */}
                <img src={ApcLogo} alt="" style={{width:"100%",height:"100%"}}/>
                
                </a>
            </div>
            </div>

            <p 
            className="heroSectionMoreInfo"
            // style={{'position':"absolute",'top':0,right:"0",width:"40%"}} 
            >The sole aim and objective of this organization
    is to mobilize enough support for the emergence of <span style={{color:"yellow"}}>
     Hon. Rotimi Chibuike Amaechi as the President of the 
    Federal Republic of Nigeria
    </span>
    </p>
            </div>


</div>

<div className="hero-footer">
{/* <h4 style={{color:"green"}}>Apc To the World</h4> */}
<p>Let Us Make History Together</p>
<a 
onClick={(e)=>{
    e.preventDefault();
    console.log("D")
    props.setShowRegisterForm(true)
}}
className="btn_01" style={{borderRadius:"10px"}}>Join Now!</a>
</div>
</div>
</div>
</div>
{/* <br /><br /> */}
</section>
    )
}

export default HeroSection