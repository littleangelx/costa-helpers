import { useSelector } from "react-redux";

import JobAllocationItem from "./JobAllocationItem";
import { useParams } from "react-router-dom";

const JobAllocation = () => {
  const { day } = useParams();

  const jobList = useSelector((state) => state.jobs.jobs);

  const filterJobs = (startTime, endTime) => {
    let chosenJobs = [];
    const jobsFitTime = jobList.filter(
      (job) => job.startTime >= startTime && job.startTime < endTime
    );
    jobsFitTime.map((job) => {
      job.days.forEach((dayInfo) => {
        if (dayInfo.value === day) {
          chosenJobs.push(job);
        }
      });
    });
    return chosenJobs;
  };

  return (
    <div className="jobAllocation">
      <h3>
        Job allocation for{" "}
        {day === "wed" ? "Wednesday" : day === "thurs" ? "Thursday" : "Friday"}
      </h3>

      <h4>9.00 - 10.30</h4>
      <div className="rowContainer">
        {filterJobs(9, 10.3).map((job) => (
          <JobAllocationItem key={job.id} job={job} day={day} startTime={9} />
        ))}
      </div>
      <h4>10.30 - 11.45</h4>
      <div className="rowContainer">
        {filterJobs(10.3, 11.45).map((job) => (
          <JobAllocationItem
            key={job.id}
            job={job}
            day={day}
            startTime={10.3}
          />
        ))}
      </div>
      <h4>11.45 - 12.00</h4>
      <div className="rowContainer">
        {filterJobs(11.45, 12).map((job) => (
          <JobAllocationItem
            key={job.id}
            job={job}
            day={day}
            startTime={11.45}
          />
        ))}
      </div>
      <h4>12.00 - 13.30</h4>
      <div className="rowContainer">
        {filterJobs(12, 13.3).map((job) => (
          <JobAllocationItem key={job.id} job={job} day={day} startTime={12} />
        ))}
      </div>
      <h4>13.30 - 16.45</h4>
      <div className="rowContainer">
        {filterJobs(13.3, 16.45).map((job) => (
          <JobAllocationItem
            key={job.id}
            job={job}
            day={day}
            startTime={13.3}
          />
        ))}
      </div>
      <h4>16.45 - 18.00</h4>
      <div className="rowContainer">
        {filterJobs(16.45, 18).map((job) => (
          <JobAllocationItem
            key={job.id}
            job={job}
            day={day}
            startTime={16.45}
          />
        ))}
      </div>
    </div>
  );
};

export default JobAllocation;
