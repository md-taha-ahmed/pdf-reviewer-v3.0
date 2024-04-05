import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import PdfReviewer from "./pages/PdfReviewer"
import Navbar from './components/Navbar'
import MayShowNavBar from './components/MayShowNavBar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <MayShowNavBar><Navbar /></MayShowNavBar>

        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/pdf"
              element={<PdfReviewer />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;