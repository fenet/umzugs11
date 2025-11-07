// App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { trackPageview } from "./lib/analytics";
import Landing from "./pages/Landing";
// Removed Home/Order/Search routes in favor of external booking
import Imprint from "./pages/Imprint";
// Removed Profile route in favor of external booking
import Footer from "./components/Footer";
import LogoHeader from "./components/LogoHeader";
import PriceCalculator from "./pages/PriceCalculator";
import Login from "./pages/Login";

function Layout({ children }) {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Show LogoHeader only on non-landing pages */}
      {!isLanding && <LogoHeader />}

      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>

      {/* Hide Footer on Landing (since Landing has its own footer) */}
      {!isLanding && <Footer />}
    </div>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    trackPageview(location.pathname);
  }, [location.pathname]);

  return (
    <Routes>
      {/* Landing page (full-width, with its own navbar/footer) */}
      <Route path="/" element={<Landing />} />

      {/* Redirect legacy internal routes to Cal.com */}
      <Route path="/book" element={<ExternalRedirect url="https://cal.com/sebastijan-kerculj-3wvhet/secret" />} />
      <Route path="/order/:id" element={<ExternalRedirect url="https://cal.com/sebastijan-kerculj-3wvhet/secret" />} />
      <Route path="/search" element={<ExternalRedirect url="https://cal.com/sebastijan-kerculj-3wvhet/secret" />} />
      <Route path="/profile" element={<ExternalRedirect url="https://cal.com/sebastijan-kerculj-3wvhet/secret" />} />
      <Route 
        path="/calculator" 
        element={
        <PriceCalculator />
      } 
      />
      <Route 
        path="/login" 
        element={<Login 
        />
      } 
      />
      <Route
        path="/imprint"
        element={
          // Imprint should look like Landing with its own header/footer
          <Imprint />
        }
      />
    </Routes>
  );
}
function ExternalRedirect({ url }) {
  useEffect(() => {
    window.location.replace(url);
  }, [url]);
  return null;
}


