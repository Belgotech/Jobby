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
import Contact from "./Pages/Help/Contact"
import PageNotFound from "./Pages/Help/PageNotFound"
import Careers from "./Pages/careers/Careers"

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
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers" element={<CareersLayout />}>
        <Route index element={<Careers />} />
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