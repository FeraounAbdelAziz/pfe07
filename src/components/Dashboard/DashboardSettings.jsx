import React from "react";

function DashboardSettings() {
  return (
    <>
      <div className="dashboard-settings">
        <h2>Update Form</h2>
        <form action="#" className="form-settings">
          <input className="input-settings" type="text" placeholder="First Name"/>
          <input className="input-settings" type="text" placeholder="Last Name"/>
          <input className="input-settings" type="text" placeholder="Email"/>
          <input className="input-settings" type="text" placeholder="Phone Number"/>
          <input className="input-settings" type="text" placeholder="Password"/>
          <input className="input-settings" type="text" placeholder="Confirm Password"/>
          <input className="input-settings" type="text" placeholder="Birth-date"/>
          <input className="input-settings" type="text" placeholder="State"/>
          <input className="input-settings" type="text" placeholder="Address"/>
          <button type="submit">Submit</button>
        </form>
          <div className="change-theme">
            <h3>Change Theme</h3>
            <div className="color-theme">
              <span className="color-theme-form color-theme-green"></span>
              <span className="color-theme-form color-theme-red"></span>
              <span className="color-theme-form color-theme-blue"></span>
              <span className="color-theme-form color-theme-dark"></span>
            </div>
          </div>
      </div>
    </>
  );
}

export default DashboardSettings;
