import { Outlet } from "react-router-dom";
import Navber from "../../pages/Navber/Navber.jsx";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navber />
      <Outlet />
    </div>
  );
};

export default MainLayout;
