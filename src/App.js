
import Home from './container/home'
import About from './container/about'
import Footer from './components/Footer'
import Header from './components/Header'
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
<Footer/>
  </BrowserRouter>
  );
}

export default App;
