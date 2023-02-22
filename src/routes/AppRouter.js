import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Menu from "../pages/Menu";

function AppRouter() {
  return (
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<Login/>} />
      <Route path="/menu" element={<Menu/>} />

    </Routes>

    </BrowserRouter>
  );
}

export default AppRouter;
