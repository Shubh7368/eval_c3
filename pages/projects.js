import React from 'react';
import {AiOutlineFolder, AiOutlineStar} from "react-icons/ai"
import {BiGitRepoForked} from "react-icons/bi"


const projects = ({data :{items}}) => {
    console.log(items)
  return (
    <div>
        <h1 style={{textAlign:"center",backgroundColor:"skyblue"}}>Projects</h1>
        <div style={{
            display:"grid",
            gridTemplateColumns:"repeate(3,1fr)",
            gap:"10px",
            padding:"0 20px"
        }}>
            {items.map((data)=>(
                <div style={{border : "1px solid black",
            padding:"15px"}}>
                <h3 style={{display:"flex", alignItems:"center",gap:"10px"}}>
                    <AiOutlineFolder fontSize={20} />
                    {data.name}
                </h3>
                <p>{data.description}</p>
                <div style={{dispay:"flex" ,justifyContent:"center"}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"15px"}}>
                        <div>
                            <AiOutlineStar fontSize={20} />
                            {data.stargazers_count}
                        </div>
                        <div></div>
                        <div>
                            <BiGitRepoForked fontSize={20} />
                            {data.forks}
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export async function getServerSideProps(){
    const res = await fetch(`https://api.github.com/search/repositories?q=user:Shubh7368+fork:true&sort=updated&per_page=10&type=Repositories`)
    const data = await res.json();

    return { 
        props : {
             data
             } 
            }// will be passed to the page component as props
}
export default projects;