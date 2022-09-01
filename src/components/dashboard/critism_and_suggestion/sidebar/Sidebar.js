import React from "react";
import "./Sidebar.css";
import logo from "../../../../assets/PackageList.png";
import { Link } from "react-router-dom";

function Sidebar({ sidebarOpen, closeSidebar }) {
  function logout(){
    localStorage.clear();
  }
    return(
      <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" style={{ width: "80px", height: "80px", marginRight: "20px" }}/>
          <span style={{ color:"#3b97d3" }}><h4>Package</h4></span>
          <span><h4>List</h4></span>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link">
          <i className="fa fa-home"></i>
          <a href="/Dashboard">Dashboard</a>
        </div>
        <h2>Components</h2>
        <div className="sidebar__link">
          <i className="fa fa-table" aria-hidden="true"></i>
          <a href="/Dashboard/whole-table-dashboard">Whole Tables</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-area-chart"></i>
          <a href="/Dashboard/charts-dashboard">Charts</a>
        </div>
        <h2>Components List</h2>
        <div className="sidebar__link">
          <i className="fa fa-th-list"></i>
          <a href="/Dashboard/handover-dashboard">Handover</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-list-alt"></i>
          <a href="/Dashboard/initial-shift-dashboard">Initial Shift Inspection</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-indent"></i>
          <a href="/Dashboard/production-paramaters">Production Parameters</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-list"></i>
          <a href="/Dashboard/materials">Materials</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-th"></i>
          <a href="/Dashboard/production-result">Production Result</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-list-ol"></i>
          <a href="/Dashboard/imd-reject">IMD Reject</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-columns"></i>
          <a href="/Dashboard/total-resin-usage">Total Resin Usage</a>
        </div>
        <h2>Problem</h2>
        <div className="sidebar__link">
          <i className="fa fa-exclamation-circle"></i>
          <a href="/Dashboard/report">Report</a>
        </div>
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-exclamation-triangle"></i>
          <a href="/Dashboard/critism-and-suggestion">Criticism and Suggestions</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <Link to="/" onClick={logout}>Logout</Link>
        </div>
      </div>
    </div>
    )
}

export default Sidebar