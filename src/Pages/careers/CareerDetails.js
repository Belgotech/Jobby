import { useParams } from "react-router-dom"

export default function CareersDetails() {
  const { id } = useParams

  return (
<div className="careers-details">
     <h2>{ id }</h2>
    </div>
  )
}