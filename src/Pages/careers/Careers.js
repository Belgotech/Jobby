import { useLoaderData, Link, Navigate } from "react-router-dom"
import { useState } from "react"

export default function Careers() {
  const careers = useLoaderData()
  const [user, setUser] = useState("Beloved")

  if(!user){
    return <Navigate to="/" replace={true} />
  }

  return (
    <div className="careers">
      {careers.map(careers => (
        <Link to={careers.id.toString()} key={careers.id}>
          <p>{careers.title}</p>
          <p>Based in {careers.location}</p>
        </Link>
      ))}
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}
 
// data loader
export const careersLoader = async () => {

    const res = await fetch("https://localhost:4000/careers")

    if (!res.ok) {
      throw Error('Could not find that career.')
    }

    return res.json()
 
}