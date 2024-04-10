import React from "react";
import SideBar from "../components/sidebar/SideBar";
import NavBar from "../components/NavBar";

const page = () => {
  return (
    <div className="flex w-full h-screen flex-col gap-0">
      <NavBar/>
        <SideBar/>
    </div>
  );
};

export default page;
