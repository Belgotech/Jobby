import { useLoaderData, useParams } from "react-router-dom"

export default function CareersDetails() {
  const { id } = useParams()
  const career = useLoaderData()

  return (
<div className="careers-details">
     <h2>Career Details for{career.title}</h2>
     <p>Starting Salary :{career.salary}</p>
     <p>Location:{career.location} </p>
     <div className="details">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem eius dignissimos consequatur sapiente magnam porro, esse similique in sunt dolorum nesciunt eaque odio necessitatibus fugiat aliquid adipisci illum earum voluptatibus!</p>
     </div>
    </div>
  )
}

// loader function
export const CareerDetailsLoader = async ({ params })=>{
  const { id } = params

  try{
  const res = await fetch('https://localhost:4000/careers', + id )

  return res.json()
}catch(erros){
  console.log(erros)
}
}