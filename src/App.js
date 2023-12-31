import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"

//Pages
import Home from "./Pages/Home"
import About from "./Pages/About"
import Faq from "./Pages/Help/Faq"
import Contact, { contactAction } from "./Pages/Help/Contact"
import PageNotFound from "./Pages/Help/PageNotFound"
import Careers, { careersLoader } from "./Pages/careers/Careers"
import CareersDetails, { CareerDetailsLoader } from "./Pages/careers/CareerDetails"
import CareersError from "./Pages/careers/CareersError"

//Layout
import RootLayout from "./Layout/RootLayout"
import HelpLayout from "./Layout/HelpLayout"
import CareersLayout from "./Layout/CareersLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />} >
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route path="careers" element={<CareersLayout />} errorElement={<CareersError />} >
        <Route index element={<Careers />} 
        loader={careersLoader}
        />
      <Route 
        path=":id"
        element={<CareersDetails />}
        loader={CareerDetailsLoader}
      />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App