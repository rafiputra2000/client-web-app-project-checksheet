import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import '../../index.css';
// import Main from "./main/Main"
import Main from "./total_resin_usage/main/Main";
import Navbar from "./total_resin_usage/navbar/Navbar";
import Sidebar from "./total_resin_usage/sidebar/Sidebar"


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