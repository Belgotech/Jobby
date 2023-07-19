import { Link } from "react-router-dom"

const PageNotFound = ()=>{
    return(
        <div className="pageNotFound">
            <h2>Page Not Found</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro laborum repudiandae tempore repellendus dolorem harum autem illum voluptate unde. Ullam quia suscipit tenetur reprehenderit nemo commodi rerum sunt, voluptas dicta.</p>

            <p>Go to<Link to="/">Homepage</Link>.</p>
        </div>
    )
}
export default PageNotFound