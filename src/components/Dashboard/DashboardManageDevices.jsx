import React from "react";

function DashboardManageDevices() {
  return (
    <>
      <div className="title_add">
        <h2 className="manage-title">All Devices</h2>
        <button className="btn-add">Add Device</button>
      </div>
      <table className="manage-device">
        <thead>
          <tr>
            <th>id</th>
            <th> Name </th>
            <th>Status</th>
            <th>Connection</th>
            <th>Details</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Patient Name</td>
            <td>
              <span className="btn-form status-assigned">Assigned</span>
            </td>
            <td>
              {" "}
              <span className="connexion-circle"></span> Connected
            </td>
            <td>
              <form action="#">
                <button type="submit" className="btn-form show-details-btn">
                  <i class="fa fa-file-text" aria-hidden="true"></i>
                </button>
              </form>
            </td>
            <td>
              <form action="#">
                <button type="submit" className="btn-form delete-btn">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </button>
              </form>
            </td>
          </tr>

          <tr>
            <td>1</td>
            <td>Patient Name</td>
            <td>
              <span className="btn-form status-available">Available</span>
            </td>
            <td>
              {" "}
              <span className="connexion-circle"></span> Connected
            </td>
            <td>
              <form action="#">
                <button type="submit" className="btn-form show-details-btn">
                  <i class="fa fa-file-text" aria-hidden="true"></i>
                </button>
              </form>
            </td>
            <td>
              <form action="#">
                <button type="submit" className="btn-form delete-btn">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </button>
              </form>
            </td>
          </tr>

          <tr>
            <td>1</td>
            <td>Patient Name</td>
            <td>
              <span className="btn-form status-lost">Lost</span>
            </td>
            <td>
              {" "}
              <span className="connexion-circle"></span> Connected
            </td>
            <td>
              <form action="#">
                <button type="submit" className="btn-form show-details-btn">
                  <i class="fa fa-file-text" aria-hidden="true"></i>
                </button>
              </form>
            </td>
            <td>
              <form action="#">
                <button type="submit" className="btn-form delete-btn">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </button>
              </form>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Patient Name</td>
            <td>
              <span className="btn-form status-available">Available</span>
            </td>
            <td>
              {" "}
              <span className="connexion-circle"></span> Connected
            </td>
            <td>
              <form action="#">
                <button type="submit" className="btn-form show-details-btn">
                  <i class="fa fa-file-text" aria-hidden="true"></i>
                </button>
              </form>
            </td>
            <td>
              <form action="#">
                <button type="submit" className="btn-form delete-btn">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </button>
              </form>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Patient Name</td>
            <td>
              <span className="btn-form status-assigned">Assigned</span>
            </td>
            <td>
              {" "}
              <span className="connexion-circle"></span> Connected
            </td>
            <td>
              <form action="#">
                <button type="submit" className="btn-form show-details-btn">
                  <i class="fa fa-file-text" aria-hidden="true"></i>
                </button>
              </form>
            </td>
            <td>
              <form action="#">
                <button type="submit" className="btn-form delete-btn">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </button>
              </form>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Patient Name</td>
            <td>
              <span className="btn-form status-assigned">Assigned</span>
            </td>
            <td>
              {" "}
              <span className="connexion-circle"></span> Connected
            </td>
            <td>
              <form action="#">
                <button type="submit" className="btn-form show-details-btn">
                  <i class="fa fa-file-text" aria-hidden="true"></i>
                </button>
              </form>
            </td>
            <td>
              <form action="#">
                <button type="submit" className="btn-form delete-btn">
                  <i class="fa fa-times" aria-hidden="true"></i>
                </button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default DashboardManageDevices;
