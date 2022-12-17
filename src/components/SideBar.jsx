import React from "react";
import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import DashboardAssignDevice from "./Dashboard/DashboardAssignDevice";
import DashboardManageDevices from "./Dashboard/DashboardManageDevices";
import DashboardMangePatients from "./Dashboard/DashboardMangePatients";
import DashboardSettings from "./Dashboard/DashboardSettings";
import DashboardStatistics from "./Dashboard/DashboardStatistics";

function SideBar() {
  const styles = {
    popupTrue: {
      width: "100vw",
      left: "0rem",
    },
    popupFalse: {
      "@media only screen and (maxWidth: 868px) and (minWidth:200px)": {
        width: "0px",
        left: "-15rem",
      },
    },
  };
  const [toggleSideBar, setToggleSideBar] = useState(false);
  return (
    <>
      <div className="app">
        <div className="nav-bar_dashboard">
          <div className="nav-bar">
            <i
              className="fa fa-bars"
              aria-hidden="true"
              onClick={() => {
                setToggleSideBar(!toggleSideBar);
              }}
            ></i>
            <div className="search-bar">
              <input
                className="search"
                type="text"
                placeholder="Search Patient By ID or FullName"
              />
              <i className="fa fa-search" aria-hidden="true"></i>
            </div>
            <div className="notification">
              <i className="fa fa-bell" aria-hidden="true"></i>
              <div className="account-menu">
                <ul className="menu-list">
                  <li className="list">
                    Warning : Patient N_5 is Hot
                    {/* <a className="link" href="#">Warning : Patient N_5 is Hot</a> */}
                  </li>
                  <li className="list">
                    All is perfect
                    {/* <a className="link" href="#">All is perfect</a> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="dashboard">
            <Routes>
              <Route path="/" element={<DashboardStatistics />} />
              <Route
                path="/ManagePatients"
                element={<DashboardMangePatients />}
              />
              <Route
                path="/ManageDevices"
                element={<DashboardManageDevices />}
              />
              <Route path="/AssignDevice" element={<DashboardAssignDevice />} />
              <Route path="/Settings" element={<DashboardSettings />} />
            </Routes>
          </div>
        </div>

        <div
          className="side-bar"
          style={toggleSideBar ? styles.popupTrue : styles.popupFalse}
        >
          <div className="image-container">
            <h2 className="website-title">E-health</h2>
            <img
              className="side-bar-image"
              src="assets/images/undraw_medicine_b-1-ol.svg"
              alt="websiteImage"
            />
          </div>

          <ul className="side-list">
            <NavLink to="/" className="list">
              <i className="fa list-icons fa-home" aria-hidden="true"></i>
              Dashboard
            </NavLink>
            <NavLink to="/ManageDevices" className="list">
              <i
                className="fa list-icons fa-plus-square"
                aria-hidden="true"
              ></i>
              Manage Device
            </NavLink>
            <NavLink to="/ManagePatients" className="list">
              <i
                className="fa list-icons fa-user-circle-o"
                aria-hidden="true"
              ></i>
              Manage Patient
            </NavLink>
            <NavLink to="/AssignDevice" className="list">
              <i className="fa list-icons fa-link" aria-hidden="true"></i>Assign
              Device
            </NavLink>
            <NavLink to="" className="list">
              <i className="fa list-icons fa-user-md" aria-hidden="true"></i>
              Account
            </NavLink>
            <NavLink to="/Settings" className="list">
              <i className="fa list-icons fa-cog" aria-hidden="true"></i>
              Settings
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideBar;
