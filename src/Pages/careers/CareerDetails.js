import { useLoaderData, useParams } from "react-router-dom"

export default function CareersDetails() {
  const { id } = useParams()
  const career = useLoaderData()

  return (
<div className="careers-details">
     <h2>Career Details for{career.title}</h2>
     <p>Starting Salary :{career.salary}</p>
     <p>Location:{career.location} </p>
    </div>
  )
}

// loader function
export const CareerDetailsLoader = async ({ params })=>{
  const { id } = params

  const res = await fetch('https://localhost:4000/careers', + id )

  return res.json()
}