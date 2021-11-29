


const Alert=({message,show})=>{
    console.log(message)

    return (
  <div className="alert alert-primary" style={{
      zIndex:"1000",position:"fixed",top:0,left:0,backgroundColor:"#0b0016",padding:"1rem",borderRadius:"10px",
      display:`${show}`
      }}>
     <h3 style={{color:"whitesmoke"}}>{message}</h3>
   </div>
    )
}

export default Alert