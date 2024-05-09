import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { helperActions } from "../store/helperSlice";
import { allocationActions } from "../store/allocationSlice";

const HelperPreferences = () => {
  const { helperId } = useParams();

  const [days, setDays] = useState({});

  const helperName = useSelector((state) => state.helpers.helpers).filter(
    (helper) => helper.id === parseInt(helperId)
  )[0].name;

  const helperDays = useSelector((state) => state.helpers.helperDays).filter(
    (helper) => helper.id === parseInt(helperId)
  )[0];

  useEffect(() => {
    if (helperDays) {
      setDays({
        wedAm: helperDays["wedAm"] ?? false,
        wedPm: helperDays["wedPm"] ?? false,
        thursAm: helperDays["thursAm"] ?? false,
        thursPm: helperDays["thursPm"] ?? false,
        friAm: helperDays["friAm"] ?? false,
        friPm: helperDays["friPm"] ?? false,
      });
    }
  }, [helperDays]);

  useEffect(() => {
    dispatch(
      allocationActions.initiateHelper({
        helperId: parseInt(helperId),
        helperName,
        ...days,
      })
    );
  }, [days]);

  const helperPref = useSelector(
    (state) => state.helpers.helperJobPreferences
  ).filter((helper) => helper.helperId === parseInt(helperId))[0];

  const availableJobs = useSelector((state) => state.jobs.jobs);

  const [helpWherever, setHelpWherever] = useState();
  const [definiteJobs, setDefiniteJobs] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const makeDefinite = (job) => {
    setDefiniteJobs((prev) => [...prev, job.name]);
    const startTime = job.fixedStartTime;
    dispatch(
      allocationActions.addDefinite({
        helperId: parseInt(helperId),
        startTime,
        jobName: job.name,
        days: job.days,
      })
    );
    document.getElementById(job.name).checked = true;
  };

  const clearDefinite = (job) => {
    const filteredJobs = definiteJobs.filter((item) => item != job.name);
    setDefiniteJobs(filteredJobs);
    const startTime = job.fixedStartTime;
    dispatch(
      allocationActions.removeDefinitePreference({
        helperId: parseInt(helperId),
        startTime,
        jobName: job.name,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numWalkers =
      document.querySelector("input[name=numWalkers]") &&
      document.querySelector("input[name=numWalkers]:checked").value;
    const fd = new FormData(e.target);

    dispatch(
      helperActions.addHelperJobPreferences({
        helperId: parseInt(helperId),
        helperName,
        definiteJobs,
        numWalkers,
        ...Object.fromEntries(fd),
      })
    );
    navigate("/add-helper");
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
              defaultChecked={
                helperPref &&
                helperPref["monSetup"] &&
                helperPref["monSetup"] === "on"
              }
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
              defaultChecked={
                helperPref &&
                helperPref["tuesSetup"] &&
                helperPref["tuesSetup"] === "on"
              }
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
              defaultChecked={
                helperPref &&
                helperPref["takeDown"] &&
                helperPref["takeDown"] === "on"
              }
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
        {/* <div className="rowContainer">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultChecked={
                helperPref &&
                helperPref["wedLifts"] &&
                helperPref["wedLifts"] === "on"
              }
              id="wedLifts"
              name="wedLifts"
            />
            <label className="form-check-label" htmlFor="wedLifts">
              Lifts Wed
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultChecked={
                helperPref &&
                helperPref["thursLifts"] &&
                helperPref["thursLifts"] === "on"
              }
              id="thursLifts"
              name="thursLifts"
            />
            <label className="form-check-label" htmlFor="thursLifts">
              Lifts Thurs
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultChecked={
                helperPref &&
                helperPref["friLifts"] &&
                helperPref["friLifts"] === "on"
              }
              id="friLifts"
              name="friLifts"
            />
            <label className="form-check-label" htmlFor="friLifts">
              Lifts Fri
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultChecked={
                helperPref &&
                helperPref["wedLiftsTrip"] &&
                helperPref["wedLiftsTrip"] === "on"
              }
              id="wedLiftsTrip"
              name="wedLiftsTrip"
            />
            <label className="form-check-label" htmlFor="wedLiftsTrip">
              Lifts Trips Wed
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultChecked={
                helperPref &&
                helperPref["thursLiftsTrip"] &&
                helperPref["thursLiftsTrip"] === "on"
              }
              id="thursLiftsTrip"
              name="thursLiftsTrip"
            />
            <label className="form-check-label" htmlFor="thursLiftsTrip">
              Lifts Trips Thurs
            </label>
          </div>
          <p>Number of walkers {helperName.split(" ")[0]} can take:</p>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="inlineCheckbox1"
              defaultChecked={
                (helperPref &&
                  helperPref["numWalkers"] &&
                  helperPref["numWalkers"] == 0) ||
                true
              }
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
              defaultChecked={
                (helperPref &&
                  helperPref["numWalkers"] &&
                  helperPref["numWalkers"] == 1) ||
                false
              }
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
              defaultChecked={
                (helperPref &&
                  helperPref["numWalkers"] &&
                  helperPref["numWalkers"] == 2) ||
                false
              }
              value="2"
              name="numWalkers"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox3">
              2
            </label>
          </div>
        </div> */}
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
                className="form-check-input checkboxHelper"
                type="checkbox"
                defaultChecked={
                  (helperPref &&
                    helperPref[job.name] &&
                    helperPref[job.name] === "on") ||
                  helpWherever
                }
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
                    definiteJobs.filter((item) => item == job.name).length > 0
                      ? "blueviolet"
                      : "white",
                  color:
                    definiteJobs.filter((item) => item == job.name).length > 0
                      ? "white"
                      : "black",
                }}
                onClick={() => {
                  definiteJobs.filter((item) => item == job.name).length > 0
                    ? clearDefinite(job)
                    : makeDefinite(job);
                }}
              >
                {definiteJobs.filter((item) => item == job.name).length > 0
                  ? "Clear definite"
                  : "Make definite"}
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
            document.querySelectorAll("checkbox").checked = false;
          }}
        >
          Reset
        </button>
      </form>{" "}
    </>
  );
};

export default HelperPreferences;
