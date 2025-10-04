
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Home from "./component/Pages/Home/index/Home";
import Work from "./component/Pages/Work";
import Company from "./component/Pages/Company";
import Contact from "./component/Pages/Contact";


// ✅ Service Routes import
import { ServiceRoutes } from "./component/Pages/Services/ServiceRoutes";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* ✅ Service sub-routes dynamically map */}
          {ServiceRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          <Route path="/work" element={<Work />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
