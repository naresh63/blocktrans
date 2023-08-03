import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Layout from "./pages/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlockPage from "./pages/BlockPage";

function App() {
  return (
    <div className="App">
      <BlockPage/>
      {/* <Home/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
