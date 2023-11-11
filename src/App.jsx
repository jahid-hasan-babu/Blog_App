import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import ByCategory from "./Pages/ByCategory"
import Details from "./Pages/Details"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/byCategory/:categoryID" element={<ByCategory/>}/>
        <Route path="/details/:postID" element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
