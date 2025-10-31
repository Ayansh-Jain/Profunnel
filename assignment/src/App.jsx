import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./components/first.jsx";
import Second from "./components/second.jsx";
import Third from "./components/third.jsx";
import Fourth from "./components/fourth.jsx";
import Fifth from "./components/fifth.jsx";
import Sixth from "./components/sixth.jsx";
import Seventh from "./components/seventh.jsx";
import Eighth from "./components/eighth.jsx";
import Ninth from "./components/ninth.jsx";
import Tenth from "./components/tenth.jsx";
import Eleventh from "./components/eleventh.jsx";
import Terms from "./components/terms.jsx"; // ✅ add this import
import Policy from "./components/policy.jsx"; // ✅ add this import
import Refund from "./components/refund.jsx";
import Shipping from "./components/shipping.jsx";
import Contact from "./components/contact.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Homepage route */}
        <Route
          path="/"
          element={
            <>
              <First />
              <Second />
              <Third />
              <Fourth />
              <Fifth />
              <Sixth />
              <Seventh />
              <Eighth />
              <Ninth />
              <Tenth />
              <Eleventh />
            </>
          }
        />

        {/* ✅ Terms & Conditions route */}
        <Route path="/terms" element={<Terms />} />
        {/* ✅ Privacy Policy route */}
        <Route path="/privacy" element={<Policy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
