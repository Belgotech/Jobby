import { useLoaderData, Link } from "react-router-dom"

export default function Careers() {
  const careers = useLoaderData()

  return (
    <div className="careers">
      {careers.map(careers => (
        <Link to={careers.id.toString()} key={careers.id}>
          <p>{careers.title}</p>
          <p>Based in {careers.location}</p>
        </Link>
      ))}
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