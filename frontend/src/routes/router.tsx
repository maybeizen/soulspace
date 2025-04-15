import { BrowserRouter, Routes, Route } from "react-router";
import Welcome from "../pages/welcome";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}
