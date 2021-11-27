import Card from "./Card"

import pic from "../assets/img/rotimi/Rotimi-AmaechiWIthCap.jpg"
import pic2 from "../assets/img/rotimi/Chibuike-Rotimi-Amaechi.webp"
import pic3 from "../assets/img/rotimi/photo_group_small.jpg"

// 
const Cards=()=>{
    return(




<section className="home-blog bottom-padding">
<div className="container">
    <h2 style={{"color":"whitesmoke"}}>News</h2>
<div className="row">

        {/* <Card />
        <Card />
        <Card /> */}



<div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-blogs mb-30">
                <div className="blog-img blog-img2">
                <a target="_blank" href="https://punchng.com/ex-gov-candidate-backs-arewa-youths-asks-amaechi-to-run-for-presidency/"><img src={pic} alt="" /></a>
                </div>
                <div className="blogs-cap">
                <h5><a target="_blank"  href="https://punchng.com/ex-gov-candidate-backs-arewa-youths-asks-amaechi-to-run-for-presidency/">Ex-gov candidate backs Arewa youths, asks Amaechi to run for presidency</a></h5>
                <p>A former governorship candidate in Rivers State, Tonye Princewill, has said the Minister of Transportation, Rotimi Amaechi has the requisite qualities to become the President in ...</p>
                </div>
                </div>
        </div>





        <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-blogs mb-30">
                <div className="blog-img blog-img2">
                <a target="_blank"  href="https://www.vanguardngr.com/2021/11/prominent-woman-leader-urges-nigerian-women-to-support-amaechi-in-2023/"><img src={pic2} alt="" /></a>
                </div>
                <div className="blogs-cap">
                <h5><a target="_blank"  href="https://www.vanguardngr.com/2021/11/prominent-woman-leader-urges-nigerian-women-to-support-amaechi-in-2023/">
                Prominent Woman Leader urges Nigerian women to support Amaechi in 2023
                    </a></h5>
                <p>
                    
                The National Woman Leader for Coalition for Progress and Continuity (CPC), Princess Sandra Onoja has beckoned on Nigerians especially women to be careful of the choices of who will be President of Nigeria in 2023. 
                    </p>
                </div>
                </div>
        </div>




        <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-blogs mb-30">
                <div className="blog-img blog-img2">
                <a target="_blank"  href="https://unitar.org/about/news-stories/news/minister-chibuike-rotimi-amaechi-appointed-unitar-board-trustees"><img src={pic3} alt="" /></a>
                </div>
                <div className="blogs-cap">
                <h5><a target="_blank"  href="https://unitar.org/about/news-stories/news/minister-chibuike-rotimi-amaechi-appointed-unitar-board-trustees">Minister Chibuike Rotimi Amaechi Appointed to UNITAR Board of Trustees</a></h5>
                <p>
                    
                22 January 2016, Abuja, Nigeria – The Secretary-General of the United Nations has appointed the Hon. Chibuike Rotimi Amaechi, Minister of Transportation of the Federal Republic of Nigeria, as a member of the Board of Trustees of the United Nations Institute for Training and Research (UNITAR).
                    </p>
                </div>
                </div>
        </div>

</div>
</div>
</section>


    )
}


export default Cards