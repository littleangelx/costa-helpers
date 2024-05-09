import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allocationActions } from "../store/allocationSlice";
import { jobsActions } from "../store/jobsSlice";
import { allocationJobActions } from "../store/allocationJobSlice";

const JobAllocationItem = ({ job, day, startTime }) => {
  const [definiteHelpers, setdefiniteHelpers] = useState([]);
  const [spareHelpers, setSpareHelpers] = useState([]);
  const [extraHelpers, setExtraHelpers] = useState([]);

  const dispatch = useDispatch();

  const helperJobs = useSelector((state) => state.allocation.helperJobs);
  const helperPref = useSelector(
    (state) => state.helpers.helperJobPreferences
  ).filter((helper) => helper[job.name]);

  const numberNeeded = useSelector((state) => state.jobs.jobs).filter(
    (item) => item.id === job.id
  )[0].needed;

  console.log(helperJobs);

  useEffect(() => {
    setdefiniteHelpers(
      helperJobs.filter(
        (helper) =>
          helper[day][startTime] !== false &&
          helper[day][startTime].includes(job.name)
      )
    );

    setSpareHelpers(
      helperJobs.filter(
        (helper) =>
          helper[day][startTime].length === 0 &&
          helper[day + "Extra"][startTime] !== false &&
          helper[day + "Extra"][startTime].length === 0 &&
          helperPref.filter((item) => item.helperName === helper.helperName)
            .length > 0 &&
          helperPref.filter((item) => item.helperName === helper.helperName)[0][
            job.name
          ] === "on"
      )
    );

    setExtraHelpers(
      helperJobs.filter(
        (helper) =>
          helper[day + "Extra"][startTime] !== false &&
          helper[day + "Extra"][startTime].includes(job.name)
      )
    );
  }, [day, job.name, startTime]);

  useEffect(() => {
    definiteHelpers.forEach((helper) => {
      dispatch(
        allocationJobActions.addHelper({
          day,
          jobName: job.name,
          helperName: helper.helperName,
        })
      );
    });
  });

  useEffect(() => {
    dispatch(
      jobsActions.assignHelper({
        jobId: job.id,
        day,
        helperNames: definiteHelpers,
      })
    );
  }, [definiteHelpers, day, job.id]);

  const handleAssignHelper = (helper) => {
    dispatch(
      jobsActions.assignHelper({
        jobId: job.id,
        day,
        helperNames: [helper.name],
      })
    );

    dispatch(
      allocationJobActions.addHelper({
        day,
        jobName: job.name,
        helperName: helper.helperName,
      })
    );

    dispatch(
      allocationActions.addHelperJob({
        day,
        startTime,
        helperId: helper.helperId,
        jobName: job.name,
      })
    );

    setExtraHelpers((prev) => [...prev, helper]);
    setSpareHelpers((prev) =>
      prev.filter((item) => item.helperName !== helper.helperName)
    );

    location.reload();
  };

  const handleRemoveHelper = (helper) => {
    dispatch(
      allocationActions.removeDefinite({
        helperId: helper.helperId,
        startTime,
        jobName: job.name,
        day,
      })
    );

    dispatch(
      allocationActions.removeHelperJob({
        helperId: helper.helperId,
        startTime,
        jobName: job.name,
        day,
      })
    );

    dispatch(
      allocationJobActions.removeHelper({
        day,
        jobName: job.name,
        helperName: helper.helperName,
      })
    );

    location.reload();
  };

  return (
    <div className="columnContainer">
      <p>
        {job.name} ({job.startTime.toFixed(2)} - {job.endTime.toFixed(2)};
        around {numberNeeded} {numberNeeded === 1 ? "helper" : "helpers"}{" "}
        needed)
      </p>
      <div className="group">
        <div className="container">
          {definiteHelpers.map((helper) => (
            <span
              style={{
                fontWeight: "bold",
                color:
                  helperJobs.filter(
                    (item) => item.helperName === helper.helperName
                  )[0][day][startTime].length > 1
                    ? "red"
                    : "black",
                cursor: "pointer",
              }}
              key={helper.helperName}
              onClick={() => handleRemoveHelper(helper)}
            >
              {helper.helperName}
            </span>
          ))}
          {extraHelpers.map((helper) => (
            <span
              key={helper.id}
              style={{ cursor: "pointer" }}
              onClick={() => handleRemoveHelper(helper)}
            >
              {helper.helperName}
            </span>
          ))}
        </div>

        <div className="container">
          {spareHelpers.map((helper) => (
            <span
              key={helper.helperId}
              style={{ cursor: "pointer" }}
              onClick={() => handleAssignHelper(helper)}
            >
              {helper.helperName}
            </span>
          ))}
        </div>
      </div>
      {definiteHelpers.length + extraHelpers.length < numberNeeded ? (
        <p style={{ color: "red" }}>
          Need {numberNeeded - definiteHelpers.length - extraHelpers.length}{" "}
          more helpers!
        </p>
      ) : (
        <p>
          {numberNeeded} / {numberNeeded} helpers chosen 😀
        </p>
      )}
    </div>
  );
};

export default JobAllocationItem;
