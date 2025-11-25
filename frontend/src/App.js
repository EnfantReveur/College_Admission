import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" 
                   element={<AdminPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;