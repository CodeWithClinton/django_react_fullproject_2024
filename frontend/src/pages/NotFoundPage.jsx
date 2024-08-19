import React from 'react'
import {Link} from "react-router-dom"

const NotFoundPage = () => {
  return (
    <header className="py-5 bg-light border-bottom mb-5 mt-5">
    <div className="container">
        <div className="text-center my-5">
            <h1 className="fw-bolder">Page Not Found</h1>
            <Link to="/"><button className="btn btn-primary">Back to Home</button></Link>
        </div>
    </div>
</header>
  )
}

export default NotFoundPage