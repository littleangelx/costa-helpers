import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allocationActions } from "../store/allocationSlice";

const JobAllocationItem = ({ job, day, startTime }) => {
  const [definite, setDefinite] = useState([]);
  const [available, setAvailable] = useState([]);

  const helperPref = useSelector((state) => state.helpers.helperJobPreferences);
  console.log(helperPref);

  const dispatch = useDispatch();

  useEffect(() => {
    helperPref.map((helper) => {
      helper.definiteJobs.map((defJob) => {
        if (defJob.name === job.name) {
          setDefinite((prev) => [...prev, helper.helperName]);
          dispatch(
            allocationActions.addJob({
              helperId: helper.helperId,
              day,
              startTime,
              jobName: job.name,
            })
          );
        }
      });
    });
  }, []);

  console.log(definite);

  return (
    <div className="columnContainer">
      <p>{job.name}</p>
      <div className="group">
        <div className="container">
          {definite.map((helper) => (
            <p style={{ fontWeight: "bold" }} key={helper}>
              {helper}
            </p>
          ))}
        </div>
        <div className="container"></div>
      </div>
    </div>
  );
};

export default JobAllocationItem;
