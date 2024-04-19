import Course from "./components/Course"
import Home from "./components/Home"
import Contact from "./components/Contact"
import { Route, Routes } from "react-router-dom"
import Signup from "./components/Signup"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={<Course/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    </>
  )
}

export default App
