import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

//Pages
import Home from "./Pages/Home"
import About from "./Pages/About"

const App = () => {
  return (
    <BrowserRouter>
    <header>
      <nav>
        <h1>Welcome to Jobby</h1>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </nav>
    </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App