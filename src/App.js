
//import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import Body from "./components/Body/Body";
// import Button from "./components/Button/Button";
// import Alert from "./components/Alert/Alert";
// import { useState } from "react";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";


function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

/*
function App() {
  let items = ["Mohsin", "Azam", "Amal"];
  let title = "Item List";

  const [alertVisible, setAlertVisibility] = useState(false);
  
  
  
  
  return (


    // <>
    //   <Header />
    //   <Body items={items} title={title} />

    //   {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}

    //   <Button color="primary" onClick={() => setAlertVisibility(true)}>Show Alert</Button>


    //   <Footer />
    // </>
  );

}

export default App;*/
