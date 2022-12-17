import React from "react";

function DashboardMangePatients() {
  // const [textToCopy, setTextToCopy] = useState();
  return (
    <>
      <div className="dashboard-manage-patient">
        <div className="title_add">
          <h2 className="manage-title">All Patients</h2>
          <button className="btn-add">Add Patient</button>
        </div>
        <div className="manage-patient-cards">
          <div className="patient-card">
            <h3 className="id-patient">4</h3>
            <h3 className="name-patient">Ferouan Abdel Aziz</h3>

            <span className="btn-form status-assigned">
              assigned device-id : 5
            </span>

            <div className="email-patient">
              <input
                type="text"
                className="patient-input"
                value="azizmahon10@gmail.com /* info */"
                readOnly
              />
              <button
                className="btn-form btn-copy"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "here put the  /* info */and it will be in the clipboard"
                  );
                }}
              >
                Copy
              </button>
            </div>
            <div className="number-patient">
              <input
                type="text"
                className="patient-input"
                value="+213557236808 /* info */"
                readOnly
              />

              <button
                className="btn-form btn-copy"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "here put the  /* info */and it will be in the clipboard"
                  );
                }}
              >
                Copy
              </button>
            </div>
            {/* temp */}
            <div className="modification">
              how many times u checked it today ?
            </div>
            {/* temp */}
            <div className="modification">
              <button className="btn-form btn-show-profile">
                Edit Profile
              </button>
              <button className="btn-form btn-delete-profile">Delete</button>
              <button className="btn-form btn-consult">
                Consult The Patient
              </button>
            </div>
          </div>

          <div className="patient-card">
            <h3 className="id-patient">4</h3>
            <h3 className="name-patient">Ferouan Abdel Aziz</h3>

            <span className="btn-form status-assigned">
              assigned device-id : 5
            </span>

            <div className="email-patient">
              <input
                type="text"
                className="patient-input"
                value="azizmahon10@gmail.com /* info */"
                readOnly
              />
              <button
                className="btn-form btn-copy"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "here put the  /* info */and it will be in the clipboard"
                  );
                }}
              >
                Copy
              </button>
            </div>
            <div className="number-patient">
              <input
                type="text"
                className="patient-input"
                value="+213557236808 /* info */"
                readOnly
              />

              <button
                className="btn-form btn-copy"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "here put the  /* info */and it will be in the clipboard"
                  );
                }}
              >
                Copy
              </button>
            </div>

            <div className="modification">
              <button className="btn-form btn-show-profile">
                Edit Profile
              </button>
              <button className="btn-form btn-delete-profile">Delete</button>
              <button className="btn-form btn-consult">
                Consult The Patient
              </button>
            </div>
          </div>
          <div className="patient-card">
            <h3 className="id-patient">4</h3>
            <h3 className="name-patient">Ferouan Abdel Aziz</h3>

            <span className="btn-form status-assigned">
              assigned device-id : 5
            </span>

            <div className="email-patient">
              <input
                type="text"
                className="patient-input"
                value="azizmahon10@gmail.com /* info */"
                readOnly
              />
              <button
                className="btn-form btn-copy"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "here put the  /* info */and it will be in the clipboard"
                  );
                }}
              >
                Copy
              </button>
            </div>
            <div className="number-patient">
              <input
                type="text"
                className="patient-input"
                value="+213557236808 /* info */"
                readOnly
              />

              <button
                className="btn-form btn-copy"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "here put the  /* info */and it will be in the clipboard"
                  );
                }}
              >
                Copy
              </button>
            </div>

            <div className="modification">
              <button className="btn-form btn-show-profile">
                Edit Profile
              </button>
              <button className="btn-form btn-delete-profile">Delete</button>
              <button className="btn-form btn-consult">
                Consult The Patient
              </button>
            </div>
          </div>
          <div className="patient-card">
            <h3 className="id-patient">4</h3>
            <h3 className="name-patient">Ferouan Abdel Aziz</h3>

            <span className="btn-form status-assigned">
              assigned device-id : 5
            </span>

            <div className="email-patient">
              <input
                type="text"
                className="patient-input"
                value="azizmahon10@gmail.com /* info */"
                readOnly
              />
              <button
                className="btn-form btn-copy"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "here put the  /* info */and it will be in the clipboard"
                  );
                }}
              >
                Copy
              </button>
            </div>
            <div className="number-patient">
              <input
                type="text"
                className="patient-input"
                value="+213557236808 /* info */"
                readOnly
              />

              <button
                className="btn-form btn-copy"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "here put the  /* info */and it will be in the clipboard"
                  );
                }}
              >
                Copy
              </button>
            </div>

            <div className="modification">
              <button className="btn-form btn-show-profile">
                Edit Profile
              </button>
              <button className="btn-form btn-delete-profile">Delete</button>
              <button className="btn-form btn-consult">
                Consult The Patient
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardMangePatients;
