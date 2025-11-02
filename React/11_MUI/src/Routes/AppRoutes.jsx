import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import PageNotFound from "../Pages/PageNotFound";
import ProfilePage from "../Pages/ProfilePage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} /> {/* Redirect root (/) to /home */}
      <Route path="/home" element={<HomePage />}> {/* Parent route for Home with nested children */}
        <Route index element={<div>Welcome to Home</div>} /> {/* Default child for /home */}
        <Route path="profile" element={<ProfilePage />} />{/* Nested child route for /home/profile */}
      </Route>
      
      <Route path="/login" element={<LoginPage />} /> {/* Independent Login route */}
      <Route path="*" element={<PageNotFound />} /> {/* 404 fallback */}
    </Routes>
  );
}

export default AppRoutes;

// What about loginForm? Do I include it in routes?
// No. loginForm.jsx is a component, not a page. You use it inside LoginPage.jsx.



// TEMPLATE
// import { Router, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/home" replace />} /> {/* Redirect root (/) to /home */}
//       <Route path="/home" element={<HomePage />}> {/* Parent route for Home with nested children */}
//         <Route index element={<div>Welcome to Home</div>} /> {/* Default child for /home */}
//         <Route path="profile" element={<ProfilePage />} />{/* Nested child route for /home/profile */}
//       </Route>
  
//       <Route path="/login" element={<LoginPage />} /> {/* Independent Login route */}
//       <Route path="*" element={<PageNotFound />} /> {/* 404 fallback */}
//     </Routes>
//   );
// }

// export default AppRoutes;