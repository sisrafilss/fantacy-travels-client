import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PageNotFound from "./pages/NotFoundPage/NotFoundPage";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Register from "./pages/Login/Register/Register";
import Blogs from "./pages/Blogs/Blogs";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import ShareYourBlog from "./pages/ShareYourBlog/ShareYourBlog";
import PrivatRoute from "./pages/Login/PrivatRoute/PrivatRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route
          path="/blogs/:id"
          element={
            <PrivatRoute>
              <SingleBlog />
            </PrivatRoute>
          }
        />

        <Route path="/share-your-blog" element={<ShareYourBlog />} />
        <Route
          path="/dashboard/*"
          element={
            <PrivatRoute>
              <Dashboard />
            </PrivatRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
