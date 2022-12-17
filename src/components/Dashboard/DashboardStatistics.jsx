import React from "react";

function DashboardStatistics() {
  return (
    <>
      <div className="title_add">
        <h2 className="manage-title">Statistics</h2>
        <span className="line"></span>
      </div>
      <div className="dashboard-manage-device">
        <div className="statistic-devices">
          <h5>Total Devices</h5>
          <p>
            <b>9 </b>
          </p>
          <i className="fa fa-line-chart" aria-hidden="true"></i>
        </div>
        <div className="statistic-devices">
          <h5>Available Devices</h5>
          <p>
            <b>7 </b>
          </p>
          <i className="fa fa-line-chart" aria-hidden="true"></i>
        </div>
        <div className="statistic-devices">
          <h5>Assigned Devices</h5>
          <p>
            <b>2</b>
          </p>
          <i className="fa fa-line-chart" aria-hidden="true"></i>
        </div>

        <div className="statistic-devices">
          <h5>Lost Devices</h5>
          <p>
            <b>1</b>
          </p>
          <i className="fa fa-line-chart" aria-hidden="true"></i>
        </div>
      </div>
      <div className="dashboard-manage-device">
        <div className="statistic-devices">
          <h5>Total Patients</h5>
          <p>
            <b>9 </b>
          </p>
          <i className="fa fa-line-chart" aria-hidden="true"></i>
        </div>
        <div className="statistic-devices">
          <h5>Patients Have Device</h5>
          <p>
            <b>7 </b>
          </p>
          <i className="fa fa-line-chart" aria-hidden="true"></i>
        </div>
        <div className="statistic-devices">
          <h5>Patients with No Device</h5>
          <p>
            <b>2</b>
          </p>
          <i className="fa fa-line-chart" aria-hidden="true"></i>
        </div>
      </div>
      
    </>
  );
}

export default DashboardStatistics;
