import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"

//Pages
import Home from "./Pages/Home"
import About from "./Pages/About"

//Layout
import RootLayout from "./Layout/RootLayout"
import HelpLayout from "./Layout/HelpLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />} >
        <Route path="faq" />
        <Route path="contact" />
      </Route>
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App