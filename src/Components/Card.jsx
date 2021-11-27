import pic from "../assets/img/rotimi/Rotimi-AmaechiWIthCap.jpg"


const Card =()=>{


    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-blogs mb-30">
                <div className="blog-img blog-img2">
                <a href="#"><img src={pic} alt="" /></a>
                </div>
                <div className="blogs-cap">
                <h5><a href="#">Ex-gov candidate backs Arewa youths, asks Amaechi to run for presidency</a></h5>
                <p>A former governorship candidate in Rivers State, Tonye Princewill, has said the Minister of Transportation, Rotimi Amaechi has the requisite qualities to become the President in ...</p>
                </div>
                </div>
        </div>
    )
}

export default Card