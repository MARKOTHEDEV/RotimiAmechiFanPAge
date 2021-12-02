


const Alert=({message,show,setShowpopUp})=>{
    // console.log(message)

    return (
  <div className="alert alert-primary" style={{
      zIndex:"1000",position:"fixed",top:0,left:0,backgroundColor:"#0b0016",padding:"1rem",borderRadius:"10px",
      display:`${show}`,minWidth:"700px",justifyContent:"space-between"
      }}>
     <h3 style={{color:"whitesmoke"}}>{message}</h3>
     <i class="fas fa-times-circle" style={{color:"white",fontSize:'1.4rem',cursor:"pointer"}}
      onClick={(e)=>setShowpopUp(false)}
     ></i>
   </div>
    )
}

export default Alert