import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import '../../index.css';
// import Main from "./main/Main"
import Main from "./imd_reject/main/Main";
import Navbar from "./imd_reject/navbar/Navbar";
import Sidebar from "./imd_reject/sidebar/Sidebar"


function Dashboard(){

    const [sidebarOpen, setSidebarOpen] = useState(false);

    function openSidebar() {
        setSidebarOpen(true);
    }

    function closeSidebar(){
        setSidebarOpen(false);
    }

    const token = localStorage.getItem("token");

    if(!token){
        return(
        <Navigate to="/"/>
        );
    }

    return(
    <div className="container2">
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <Main />
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>);
}

export default Dashboard;