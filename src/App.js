import { 
  createBrowserRouter,
  Routes, 
  Route, 
  createRoutesFromElements
} from "react-router-dom"

//Pages
import Home from "./Pages/Home"
import About from "./Pages/About"

const router = createBrowserRouter(
  createRoutesFromElements(
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
  )
)

const App = () => {
  return (
  
      // <header>
      //   <nav>
      //     <h1>Jobby</h1>
      //     <NavLink to="/">Home</NavLink>
      //     <NavLink to="about">About</NavLink>
      //   </nav>
      // </header>
      <main>
      </main>
    
  )
}

export default App