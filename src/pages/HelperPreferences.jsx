import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { helperActions } from "../store/helperSlice";

const HelperPreferences = () => {
  const { helperId } = useParams();

  const helperName = useSelector((state) => state.helpers.helpers).filter(
    (helper) => helper.id === parseInt(helperId)
  )[0].name;

  const availableJobs = useSelector((state) => state.jobs.jobs);

  const [helpWherever, setHelpWherever] = useState();
  const [definiteJobs, setDefiniteJobs] = useState([]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    dispatch(
      helperActions.addHelperJobPreferences({
        helperId,
        helperName,
        definiteJobs,
        ...Object.fromEntries(fd),
      })
    );
  };

  return (
    <>
      <h3>Helper Jobs Preferences for {helperName}</h3>
      <form className="helperPreferences" onSubmit={handleSubmit}>
        <button
          type="submit"
          className="btn btn-success"
          style={{ marginBottom: "3rem", marginRight: "1rem" }}
        >
          Save
        </button>
        <button
          type="reset"
          className="btn btn-danger"
          style={{ marginBottom: "3rem" }}
          onClick={() => {
            setDefiniteJobs([]);
            setHelpWherever(false);
          }}
        >
          Reset
        </button>
        <div className="rowContainer">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="monSetup"
              name="monSetup"
            />
            <label className="form-check-label" htmlFor="monSetup">
              Set up Monday
            </label>
          </div>
          <input
            className="form-control"
            name="monSetupTimes"
            placeholder="Times available"
          />
        </div>
        <div className="rowContainer">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="tuesSetup"
              name="tuesSetup"
            />
            <label className="form-check-label" htmlFor="tuesSetup">
              Set up Tuesday
            </label>
          </div>
          <input
            className="form-control"
            name="tuesSetupTimes"
            placeholder="Times available"
          />
        </div>
        <div className="rowContainer">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="takeDown"
              name="takeDown"
            />
            <label className="form-check-label" htmlFor="takeDown">
              Take down and clear away
            </label>
          </div>
          <input
            className="form-control"
            name="takeDownTimes"
            placeholder="Times available"
          />
        </div>
        <div className="rowContainer">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="liftsWed"
              name="liftsWed"
            />
            <label className="form-check-label" htmlFor="liftsWed">
              Lifts Wed
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="liftsThurs"
              name="liftsThurs"
            />
            <label className="form-check-label" htmlFor="liftsThurs">
              Lifts Thurs
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="liftsFri"
              name="liftsFri"
            />
            <label className="form-check-label" htmlFor="liftsFri">
              Lifts Fri
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="liftsTrip"
              name="liftsTrip"
            />
            <label className="form-check-label" htmlFor="liftsTrip">
              Lifts Trips
            </label>
          </div>
          <p>Number of walkers {helperName.split(" ")[0]} can take:</p>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="inlineCheckbox1"
              value="0"
              name="numWalkers"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              0
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="inlineCheckbox2"
              value="1"
              name="numWalkers"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              1
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="inlineCheckbox3"
              value="2"
              name="numWalkers"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox3">
              2
            </label>
          </div>
        </div>
        <div className="rowContainer anyJob">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="allJobs"
              name="allJobs"
              onChange={(e) => {
                setHelpWherever(e.target.checked);
              }}
            />
            <label className="form-check-label" htmlFor="allJobs">
              Happy to help wherever needed
            </label>
          </div>
        </div>
        {availableJobs.map((job) => (
          <div key={job.id} className="rowContainer">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultChecked={helpWherever}
                id={job.name}
                name={job.name}
              />
              <label className="form-check-label" htmlFor={job.name}>
                {job.name}
              </label>
              <button
                className="definiteButton"
                type="button"
                style={{
                  backgroundColor:
                    definiteJobs.filter((item) => item.jobId == job.id).length >
                    0
                      ? "blueviolet"
                      : "white",
                  color:
                    definiteJobs.filter((item) => item.jobId == job.id).length >
                    0
                      ? "white"
                      : "black",
                }}
                onClick={() =>
                  setDefiniteJobs((prev) => [
                    ...prev,
                    { jobId: job.id, name: job.name },
                  ])
                }
              >
                Make definite
              </button>
              <button
                className="definiteButton"
                type="button"
                onClick={() => {
                  const filteredJobs = definiteJobs.filter(
                    (item) => item.jobId != job.id
                  );
                  setDefiniteJobs(filteredJobs);
                }}
              >
                Clear definite
              </button>
            </div>
          </div>
        ))}
        <button
          type="submit"
          className="btn btn-success"
          style={{ marginBottom: "3rem", marginRight: "1rem" }}
        >
          Save
        </button>
        <button
          type="reset"
          className="btn btn-danger"
          style={{ marginBottom: "3rem" }}
          onClick={() => {
            setDefiniteJobs([]);
            setHelpWherever(false);
          }}
        >
          Reset
        </button>
      </form>{" "}
    </>
  );
};

export default HelperPreferences;
