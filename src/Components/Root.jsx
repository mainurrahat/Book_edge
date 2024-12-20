// import NavBar from "./NavBar";
// import HomePage from "./HomePage";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const Root = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
