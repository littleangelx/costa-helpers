import { useSelector } from "react-redux";

const HelperJobRow = ({ helperId, day, time }) => {
  const helperJobs = useSelector((state) => state.allocation.helperJobs).filter(
    (item) => item.helperId === parseInt(helperId)
  )[0];

  const job = helperJobs[day][time][0] || helperJobs[day + "Extra"][time][0];

  const jobDetails = useSelector((state) => state.jobs.jobs).filter(
    (item) => item.name === job
  )[0];
  const jobStartTime = jobDetails?.startTime;
  const jobEndTime = jobDetails?.endTime;

  return (
    <div>
      {jobDetails && (
        <p>
          {jobStartTime.toFixed(2)} - {jobEndTime.toFixed(2)}: {job}
        </p>
      )}
    </div>
  );
};

export default HelperJobRow;
