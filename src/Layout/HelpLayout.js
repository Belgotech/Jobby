import { NavLink, Outlet } from "react-router-dom"

const HelpLayout =()=>{
    return(
        <div className="help-layout">
            HelpLayout

            <h2>Website Help</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, asperiores.</p>

            <nav>
                <NavLink to="faq">View the faq</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>

            <Outlet />
        </div>
    )
}
export default HelpLayout 