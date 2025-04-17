import { BrowserRouter, Routes, Route } from "react-router";
import Welcome from "../pages/welcome";
import SignIn from "../pages/auth/signin";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
}
