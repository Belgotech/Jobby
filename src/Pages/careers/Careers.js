// import { useLoaderData } from "react-router-dom"

export default function Careers() {
  return (
    <div className="careers">
      
    </div>
  )
}

// data loader
export const careersLoader = async () => {
const res = await fetch("https://localhost:4000/careers")

return res.json()
}