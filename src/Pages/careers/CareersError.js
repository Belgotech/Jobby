import { Link, useRouteError, Navigate } from "react-router-dom"
import { useState } from "react"

export default function CareersError() {
  const error = useRouteError()
  const [user, setUser] = useState("Beloved")

  if(!user){
    return <Navigate to="/" replace={true} />
  }

  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the Homepage</Link>
      <div>
      <button onClick={() => setUser(null)}>Logout</button>
      </div>
    </div>
  )
}
