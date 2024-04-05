import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import PdfReviewer from "./pages/PdfReviewer"
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
             <Route 
              path="/PdfReviewer" 
              element={<PdfReviewer />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;