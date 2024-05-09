import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allocationSlice, { allocationActions } from "../store/allocationSlice";

const LiftAllocationItem = ({ day }) => {
  const helperPref = useSelector((state) => state.helpers.helperJobPreferences);
  const helperLifts = useSelector((state) => state.allocation.lifts);
  const [drivers, setDrivers] = useState(helperLifts[day + "Lifts"]);
  const [spareDrivers, setSpareDrivers] = useState([]);

  const dispatch = useDispatch();

  // helperPref.forEach((helper) => {
  //   if (helper[day + "Lifts"] === "on") {
  //     dispatch(
  //       allocationActions.initiateLifts({
  //         day,
  //         helperName: helper.helperName,
  //       })
  //     );
  //   }
  // });

  const handleAddDriver = (helper) => {
    setDrivers((prev) => new Set(prev).add(helper));
    setSpareDrivers((prev) => {
      const next = new Set(prev);
      next.delete(helper);
      return next;
    });
    dispatch(allocationActions.addDriver({ day, helperName: helper }));
  };

  const handleRemoveDriver = (helper) => {
    // setDrivers((prev) => new Set(prev).delete(helper));
    setDrivers((prev) => {
      const next = new Set(prev);
      next.delete(helper);
      return next;
    });
    setSpareDrivers((prev) => {
      const next = new Set(prev);
      next.add(helper);
      return next;
    });
    dispatch(allocationActions.removeDriver({ day, helperName: helper }));
  };

  return (
    <div className="group">
      <div className="container">
        {[...drivers].map((helper) => (
          <span
            key={helper}
            style={{ cursor: "pointer" }}
            onClick={() => handleRemoveDriver(helper)}
          >
            {helper}
          </span>
        ))}
      </div>
      <div className="container">
        {[...spareDrivers].map((helper) => (
          <span
            key={helper.helperId}
            style={{ cursor: "pointer" }}
            onClick={() => handleAddDriver(helper)}
          >
            {helper}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LiftAllocationItem;
