import { BrowserRouter, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Topic from "./pages/Topic";
import Schedule from "./pages/Schedule";
import Resident from "./pages/Resident";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";

function RouteAuth() {
  const navigate = useNavigate()
  const { isAuthenticated } = useContext(AuthContext)

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Acesso negado!", {
        style: {
          borderRadius: '6px',
          background: '#323238',
          color: '#E1E1E6',
        },
      });
      navigate("/login")
    }
  }, [isAuthenticated])
  return <Outlet/>
}

function RouteNoAuth() {
  const navigate = useNavigate()
  const { isAuthenticated } = useContext(AuthContext)
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated]);
  return <Outlet/>
}

export default function Router() {
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" Component={Home} />
          <Route Component={RouteNoAuth}>
            <Route path="/login" Component={Login} />
            <Route path="/registrar" Component={Register} />
          </Route>
          <Route Component={RouteAuth}>
            <Route path="/forum" Component={Forum} />
            <Route path="/forum/:id" Component={Topic} />
            <Route path="/calendario" Component={Schedule} />
            <Route path="/moradores" Component={Resident} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}