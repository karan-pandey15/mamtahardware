import "./Styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Cibil from "./Pages/Cibil";
import ApplyNow from "./Pages/ApplyNow";
import Contact from "./Pages/Contact";
import BecomePartner from "./Pages/BecomePartner";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import EmpDashborad from "./dashboard/employee/EmpDashborad";
import Carpenter from "./Pages/Carpenter";
import PhoneFooter from "./Components/PhoneFooter";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/carpenter" element={<Carpenter />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/cibil-issue" element={<Cibil />} />
          <Route path="/become-partner" element={<BecomePartner />} />
          <Route path="/apply-now" element={<ApplyNow />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/empdashboard" element={<EmpDashborad />} />
        </Routes>
        <PhoneFooter />
      </Router>
    </div>
  );
}

export default App;
