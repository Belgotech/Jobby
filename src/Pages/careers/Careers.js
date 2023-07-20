import { useLoaderData, Link } from "react-router-dom"

export default function Careers() {
  const careers = useLoaderData()

  return (
    <div className="careers">
      {careers.map(careers => (
        <Link to="/" key={careers.id}>
          <p>{careers.title}</p>
          <p>Based in {careers.location}</p>
        </Link>
      ))}
    </div>
  )
}

// data loader
export const careersLoader = async () => {

  try {
    const res = await fetch("https://localhost:4000/careers")

    return res.json()
  } catch (errors) {
    console.log(errors)
  }
}