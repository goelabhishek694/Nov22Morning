import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Navbar from "./component/Navbar";
import { lazy, Suspense, useEffect, useState } from "react";
import LargeArraySum from "./component/UseMemo";
import ParentComponent from "./component/Memo";
// import Home from "./component/Home";
// import About from "./component/About";
// import Contact from "./component/Contact";

//lazy load the components
const Home = lazy(() => import("./component/Home"))
const About = lazy(() => import("./component/About"))
const Contact = lazy(() => import("./component/Contact"))
function App() {
  // const [Home, setHome] = useState(null);
  // const [About, setAbout] = useState(null);
  // const [Contact, setContact] = useState(null);

  // useEffect(() => {
  //   //preload the home page component
  //   //import function loads the comp async
  //   import("./component/Home").then((module) =>
  //     setHome(() => module.default)
  //   );
  // }, []);

  // const loadAboutPage = () => {
  //   import("./component/About").then((module) =>
  //     setAbout(() => module.default)
  //   );
  // }

  // const loadHomePage = () => {
  //   import("./component/Home").then((module) =>
  //     setHome(() => module.default)
  //   );
  // }

  // const loadContactPage = () => {
  //   import("./component/Contact").then((module) =>
  //     setContact(() => module.default)
  //   );
  // }

  return (
    // <Router>
    //   <div>
    //     {/* <nav>
    //       <ul>
    //         <li>
    //           <Link to="/" onClick={loadHomePage}>Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about" onClick={loadAboutPage}>About</Link>
    //         </li>
    //         <li>
    //           <Link to="/contact" onClick={loadContactPage}>Contact</Link>
    //         </li>
    //       </ul>
    //     </nav> */}
    //     <Navbar/>
    //     <Suspense fallback={<div>...Loading</div>}>
    //     <Routes>
    //       {/* <Route path="/" element={Home ? <Home/> : <div>...Loading</div>} />
    //       <Route path="/about" element={About ? <About/> :  <div>...Loading</div>} />
    //       <Route path="/contact" element={Contact ? <Contact /> :  <div>...Loading</div>} /> */}
    //       <Route path="/" element={<Home/>} />
    //       <Route path="/about" element={<About/>} />
    //       <Route path="/contact" element={<Contact/>} />
    //     </Routes>
    //     </Suspense>
    //   </div>
    // </Router>

    // <LargeArraySum/>
    <ParentComponent/>
  );
}

export default App;
