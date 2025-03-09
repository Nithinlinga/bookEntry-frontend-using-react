import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LoginPage";
import PrivateRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/SignUp";

function App() {
    return (
        <Router>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
