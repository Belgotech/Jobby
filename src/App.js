import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"

//Pages
import Home from "./Pages/Home"
import About from "./Pages/About"

const App = () => {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>Jobby</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
      </nav>
    </header>
      <main>
        <Routes>
          <Route index  element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App