import React, {useState} from "react";
import { Navigate } from "react-router-dom";
import '../../index.css';
// import Main from "./main/Main"
import Main from "./initial_shift_inspection/main/Main";
import Navbar from "./initial_shift_inspection/navbar/Navbar";
import Sidebar from "./initial_shift_inspection/sidebar/Sidebar"


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