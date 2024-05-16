import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import Topic from "./pages/Topic";
import Schedule from "./pages/Schedule";
import Resident from "./pages/Resident";

export default function Router() {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/registrar" Component={Register} />
        <Route path="/home" Component={Home} />
        <Route path="/forum" Component={Forum} />
        <Route path="/forum/:id" Component={Topic} />
        <Route path="/calendario" Component={Schedule} />
        <Route path="/moradores" Component={Resident} />
      </Routes>
    </BrowserRouter>
  )
}