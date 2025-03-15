import Weather from "./Components/Weather";
import { Route,Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Components/Home";
import NewsSearch from "./Components/News";
function App() {


  return (
    <>
    <div id="navbar-div"> 
          <Link to={'/'} id="Link">Home</Link>
          <Link to={'/weather'} id="Link">Weather</Link>
          <Link to={'/news'} id="Link">News</Link>
      </div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/weather" element={<Weather/>}/>
          <Route path="/news" element={<NewsSearch/>}/>
      </Routes>
      <div id="footer-div">
        <footer id="Footer">Made By Nikoloz Nutsubidze GOA</footer>
      </div>
    </>
  );
}

export default App;
