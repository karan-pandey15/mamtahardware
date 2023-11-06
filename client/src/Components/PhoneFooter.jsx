import React from 'react'
import {
    AiFillHome,
    AiFillInstagram,
    AiFillContacts,
    AiFillFacebook,
  } from "react-icons/ai";

  import {
    MdCarpenter
  } from "react-icons/md"
import { Link } from 'react-router-dom';
function PhoneFooter() {
  return (
    <div  style={{padding:"20px" ,display:"none",border:"2px solid black" }} className='showFooter' >
    <ul style={{textDecoration:"none",listStyle:"none",display:"flex",justifyContent:'center' }} >
     <li >
     <Link style={{margin:"0 20px" , fontSize:"1.8rem",color:"green" }} to="/" > <AiFillHome /></Link></li>

     <li>
     <Link style={{margin:"0 25px" , fontSize:"1.8rem",color:"green" }} to="/contact-us" > <AiFillContacts /></Link>
     </li>

     <li >
     <Link to="/carpenter"  style={{margin:"0 25px" , fontSize:"1.8rem",color:"green" }} ><MdCarpenter /></Link>
     </li>
     <li>
     <Link to="https://m.facebook.com/profile.php/?id=100063920830682&name=xhp_nt__fb__action__open_user"  style={{margin:"0 25px" , fontSize:"1.8rem",color:"green" }} ><AiFillFacebook /></Link></li>
     <li>
      <Link to="https://instagram.com/mamtahardware?igshid=MTF6bWpqMHA0ZTBwNg=="  style={{margin:"0 25px" , fontSize:"1.8rem",color:"green" }}><AiFillInstagram /></Link>
     </li>
    </ul>
    </div>
  )
}

export default PhoneFooter;