
import Home from './container/home'
import MovieDetail from './container/detail'
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
     <style>{"body { background-color: #5b729c; }"}</style>
     <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie-detail/:id" element={<MovieDetail />} />
    </Routes>
<Footer/>
  </BrowserRouter>
  );
}

export default App;
