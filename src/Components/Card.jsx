import pic from "../assets/img/gallery/blog1.jpg"


const Card =()=>{


    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-blogs mb-30">
                <div className="blog-img blog-img2">
                <a href="#"><img src={pic} alt="" /></a>
                </div>
                <div className="blogs-cap">
                <h5><a href="#">WHEN CORNERS COLLIDE: DECODING THE CONTRASTING AESTHETICS</a></h5>
                <p>- Justin Case</p>
                </div>
                </div>
        </div>
    )
}

export default Card