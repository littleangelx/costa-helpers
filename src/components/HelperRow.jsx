import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HelperRow = ({ helper }) => {
  const helperDays = useSelector((state) => state.helpers.helperDays).filter(
    (item) => item.id === parseInt(helper.id)
  )[0];

  const [days, setDays] = useState(() => new Set());

  const navigate = useNavigate();

  useEffect(() => {
    if (helperDays.wedAm && helperDays.wedPm) {
      setDays((prev) => {
        return new Set(prev).add("Wed");
      });
    } else if (helperDays.wedAm && !helperDays.wedPm) {
      setDays((prev) => {
        return new Set(prev).add("Wed (am only)");
      });
    } else if (!helperDays.wedAm && helperDays.wedPm) {
      setDays((prev) => {
        return new Set(prev).add("Wed (pm only)");
      });
    }

    if (helperDays.thursAm && helperDays.thursPm) {
      setDays((prev) => {
        return new Set(prev).add("Thurs");
      });
    } else if (helperDays.thursAm && !helperDays.thursPm) {
      setDays((prev) => {
        return new Set(prev).add("Thurs (am only)");
      });
    } else if (!helperDays.thursAm && helperDays.thursPm) {
      setDays((prev) => {
        return new Set(prev).add("Thurs (pm only)");
      });
    }

    if (helperDays.friAm && helperDays.friPm) {
      setDays((prev) => {
        return new Set(prev).add("Fri");
      });
    } else if (helperDays.friAm && !helperDays.friPm) {
      setDays((prev) => {
        return new Set(prev).add("Fri (am only)");
      });
    } else if (!helperDays.friAm && helperDays.friPm) {
      setDays((prev) => {
        return new Set(prev).add("Fri (pm only)");
      });
    }
  }, [helperDays]);

  return (
    <div className="helperRowContainer">
      <p>{helper.name}</p>

      <p>{[...days].join(", ")}</p>
      <button
        type="button"
        className="btn btn-primary editButton"
        onClick={() => navigate("/edit-helper/" + helper.id)}
      >
        View/Edit
      </button>
      <button
        type="button"
        className="btn btn-success jobsButton"
        onClick={() => navigate("/helper-jobs/" + helper.id)}
      >
        See helper jobs
      </button>
    </div>
  );
};

export default HelperRow;
