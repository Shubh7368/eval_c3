import Link from "next/link";
import React from "react";


export default function Home({data}){
  console.log(data);
  return (
    <div style={{width:"400px", height:"1000px"}}>

<div
    style={{
      display:"flex",
      margin:"auto",
      marginRight:"10px",
    }}
    >
<img src={data.avatar_url}
      alt={data.name}
      width={150}
      style={{ borderRadius:"50%", marginLeft:"60px"}}
      />
    </div>
 <div>
 <p> {data.bio}</p>
 </div>

<div style={{
  display: "flex",
  gap: "50px",
  padding:"10px"
}}>
    <ul
    style={{ display:"flex", justifyContent:"space-around", padding:"5px", listStyle:"none", alignItems:"center",backgroundColor:"skyblue"}}
    >
      
      <li> 
        <Link href="/">{data.name}</Link>
      </li>

      <li style={{marginLeft:"20px",fontSize:"25px"}}>
      <Link href="/projects" style={{marginLeft1:"20px",color:"black"}}>Projects</Link>
      </li>

      <li style={{marginLeft:"20px",fontSize:"25px"}}>

      <Link href="/experince" >Experince</Link>
      </li>
    
      
    </ul>
      
    </div>
   <button 
    style={{
      marginLeft:"20px",
      width:"80px",
      height:"28px",
      fontSize:"15px",
      backgroundColor:"skyblue",
      fontFamily:"initial"}}>
         <Link href="https://drive.google.com/file/d/1MOByofi7-6VL3gK5T9fGCtlvH0uFeafD/view?usp=sharing">Resume</Link>
         </button>
   <button 
    style={{
      marginLeft:"40px",
      width:"80px",
      height:"28px",
      fontSize:"15px",
      backgroundColor:"skyblue",
      fontFamily:"initial"}}> 
      <Link href="https://github.com/Shubh7368">Follow</Link>
      </button>
    <div>
    <p>{data.location}</p>
    </div>
    </div>
    
  );
}

export async function getServerSideProps() {

  const response= await fetch(`https://api.github.com/users/Shubh7368`);
  const data=await response.json();

  return{
    props: {data},
  };
}