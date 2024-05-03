import { useSelector } from "react-redux";
import { useState } from "react";

import JobRow from "../components/JobRow";

const AvailableJobs = () => {
  const availableJobs = useSelector((state) => state.jobs.jobs);
  const [addJob, setAddJob] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => setAddJob(true)}
      >
        Add Job
      </button>
      <div className="availableJobs">
        <div className="availableJob">
          <p>Job</p>
          <p>Start Time</p>
          <p>End Time</p>
          <p>Helpers Needed</p>
          <p>Days Needed</p>
        </div>
        {addJob && <JobRow id={availableJobs.length} isEdit={true} />}
        {availableJobs.map((job) => (
          <JobRow key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
};

export default AvailableJobs;
