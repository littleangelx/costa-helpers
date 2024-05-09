import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HelperJobRow from "../components/HelperJobRow";

const HelperJobs = () => {
  const { helperId } = useParams();
  const helperDays = useSelector((state) => state.helpers.helperDays).filter(
    (item) => item.id === parseInt(helperId)
  )[0];
  console.log(helperDays);

  return (
    <>
      <h3>Timetable for {helperDays.name}</h3>
      <div className="jobsContainer">
        <h4>Wednesday 14th August</h4>
        {!helperDays.wedAm && !helperDays.wedPm && (
          <p>Not attending on Wednesday</p>
        )}
        {(helperDays.wedAm || helperDays.wedPm) && (
          <div>
            {helperDays.wedAm && (
              <p>8.30: Arrive. Briefing, breakfast, prayer and praise</p>
            )}
            <HelperJobRow helperId={helperId} day="wed" time={9} />
            <HelperJobRow helperId={helperId} day="wed" time={10.3} />
            <HelperJobRow helperId={helperId} day="wed" time={11.45} />
            <HelperJobRow helperId={helperId} day="wed" time={12} />
            <HelperJobRow helperId={helperId} day="wed" time={13.3} />
            <HelperJobRow helperId={helperId} day="wed" time={16.45} />
          </div>
        )}
        <h4>Thursday 15th August</h4>
        {!helperDays.thursAm && !helperDays.thursPm && (
          <p>Not attending on Thursday</p>
        )}
        {(helperDays.thursAm || helperDays.thursPm) && (
          <div>
            {helperDays.thursAm && (
              <p>8.30: Arrive. Briefing, breakfast, prayer and praise</p>
            )}
            <HelperJobRow helperId={helperId} day="thurs" time={9} />
            <HelperJobRow helperId={helperId} day="thurs" time={10.3} />
            <HelperJobRow helperId={helperId} day="thurs" time={11.45} />
            <HelperJobRow helperId={helperId} day="thurs" time={12} />
            <HelperJobRow helperId={helperId} day="thurs" time={13.3} />
            <HelperJobRow helperId={helperId} day="thurs" time={16.45} />
          </div>
        )}
        <h4>Friday 16th August</h4>
        {!helperDays.friAm && !helperDays.friPm && (
          <p>Not attending on Friday</p>
        )}
        {(helperDays.friAm || helperDays.friPm) && (
          <div>
            {helperDays.friAm && (
              <p>8.30: Arrive. Briefing, breakfast, prayer and praise</p>
            )}
            <HelperJobRow helperId={helperId} day="fri" time={9} />
            <HelperJobRow helperId={helperId} day="fri" time={10.3} />
            <HelperJobRow helperId={helperId} day="fri" time={11.45} />
            <HelperJobRow helperId={helperId} day="fri" time={12} />
            <HelperJobRow helperId={helperId} day="fri" time={13.3} />
            <HelperJobRow helperId={helperId} day="fri" time={16.45} />
          </div>
        )}
      </div>
    </>
  );
};

export default HelperJobs;
