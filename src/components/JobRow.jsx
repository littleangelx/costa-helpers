import { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { jobsActions } from "../store/jobsSlice";

const DAYS = [
  { value: "Wed", label: "Wed" },
  { value: "Thurs", label: "Thurs" },
  { value: "Fri", label: "Fri" },
];

const JobRow = ({
  id,
  name = "",
  startTime = "",
  endTime = "",
  needed = "",
  days = [],
  isEdit = false,
}) => {
  const [isEditable, setIsEditable] = useState(isEdit);
  const [selectedOption, setSelectedOption] = useState([]);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEditable) {
      setIsEditable(true);
      return;
    } else {
      setIsEditable(false);

      if (!isEdit) {
        const fd = new FormData(e.target);
        const { name, startTime, endTime, needed } = Object.fromEntries(fd);
        dispatch(
          jobsActions.editJob({
            id,
            name,
            startTime: Number(startTime),
            endTime: Number(endTime),
            needed: Number(needed),
            days: selectedOption,
          })
        );
      } else {
        const fd = new FormData(e.target);
        const { name, startTime, endTime, needed } = Object.fromEntries(fd);
        dispatch(
          jobsActions.addJob({
            id,
            name,
            startTime: Number(startTime),
            endTime: Number(endTime),
            needed: Number(needed),
            days: selectedOption,
          })
        );
      }
    }
  };

  return (
    <form className="availableJob" onSubmit={handleSubmit}>
      <input
        className="jobNameInput"
        defaultValue={name}
        readOnly={!isEditable}
        name="name"
      />
      <input
        className="jobTimeInput"
        defaultValue={startTime !== "" ? startTime.toFixed(2) : ""}
        readOnly={!isEditable}
        name="startTime"
      />
      <input
        className="jobTimeInput"
        defaultValue={endTime !== "" ? endTime.toFixed(2) : ""}
        readOnly={!isEditable}
        name="endTime"
      />
      <input
        className="jobNeededInput"
        defaultValue={needed}
        readOnly={!isEditable}
        name="needed"
      />
      <Select
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "#fff",
          }),
        }}
        defaultValue={days}
        options={DAYS}
        isMulti
        isDisabled={!isEditable}
        onChange={setSelectedOption}
      />
      <button type="submit" className="btn btn-success">
        {isEditable ? "Save" : "Edit"}
      </button>
      <i
        className="fa-regular fa-trash-can deleteIcon"
        onClick={() => dispatch(jobsActions.deleteJob(id))}
      ></i>
    </form>
  );
};

export default JobRow;
