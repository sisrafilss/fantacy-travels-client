import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PageNotFound from "./pages/NotFoundPage/NotFoundPage";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Register from "./pages/Login/Register/Register";
import Blogs from "./pages/Blogs/Blogs";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
