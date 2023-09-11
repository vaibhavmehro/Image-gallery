 const Card =({download_url})=>
 {
    return (
    <div className="card">
        {/* <h2>this is card </h2> */}
        {/* <img src={"https://picsum.photos/id/102/4320/3240"} alt ="Image"></img> */}
     
       
        <img src={download_url} alt ="Image"></img>
    </div>
    )
 }
 export default Card;