import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import AdminPage from './pages/AdminPage'
import Sidebar from "./components/sidebar";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
        <div className="pl-64"> 
           <Routes>
            <Route path="/"
                   element= {<AdminPage/>}
            />
           </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
