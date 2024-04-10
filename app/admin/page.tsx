import React from "react";
import SideBar from "../components/sidebar/SideBar";
import NavBar from "../components/NavBar";
import Main from "../components/profile/Main";

const page = () => {
  return (
    <div className="flex pb-4 w-full h-screen flex-col gap-0">
      <NavBar/>
       <div className="flex w-full h-screen">
       <SideBar/>
        <Main/>
       </div>
    </div>
  );
};

export default page;
