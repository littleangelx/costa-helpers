import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { helperActions } from "../store/helperSlice";
import { allocationActions } from "../store/allocationSlice";

const EditHelperDays = () => {
  const { helperId } = useParams();

  const [days, setDays] = useState({
    wedAm: false,
    wedPm: false,
    thursAm: false,
    thursPm: false,
    friAm: false,
    friPm: false,
  });

  const helperName = useSelector((state) => state.helpers.helpers).filter(
    (helper) => helper.id === parseInt(helperId)
  )[0].name;

  const helperDays = useSelector((state) => state.helpers.helperDays).filter(
    (item) => item.id === parseInt(helperId)
  )[0];

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleSetDays = () => {
    dispatch(
      helperActions.addHelperDays({
        id: parseInt(helperId),
        name: helperName,
        ...days,
      })
    );
    dispatch(
      allocationActions.initiateHelper({
        helperId: parseInt(helperId),
        helperName,
        ...days,
      })
    );
  };

  return (
    <div>
      <h2>Days {helperName} Can Help</h2>
      <div className="daysSection">
        <button
          className="all"
          onClick={() =>
            setDays({
              wedAm: true,
              wedPm: true,
              thursAm: true,
              thursPm: true,
              friAm: true,
              friPm: true,
            })
          }
          style={{
            backgroundColor:
              days.wedAm === true &&
              days.wedPm === true &&
              days.thursAm === true &&
              days.thursPm === true &&
              days.friAm === true &&
              days.friPm === true
                ? "lightgreen"
                : "white",
          }}
        >
          All holiday
        </button>
        <div className="buttonContainer">
          <button
            onClick={() =>
              setDays((prevstate) => ({
                ...prevstate,
                wedAm: !prevstate.wedAm,
              }))
            }
            style={{
              backgroundColor: days.wedAm === true ? "lightgreen" : "white",
            }}
          >
            Wed am
          </button>
          <button
            onClick={() =>
              setDays((prevstate) => ({
                ...prevstate,
                wedPm: !prevstate.wedPm,
              }))
            }
            style={{
              backgroundColor: days.wedPm === true ? "lightgreen" : "white",
            }}
          >
            Wed pm
          </button>
          <button
            onClick={() =>
              setDays((prevstate) => ({
                ...prevstate,
                wedAm: true,
                wedPm: true,
              }))
            }
            style={{
              backgroundColor:
                days.wedAm === true && days.wedPm === true
                  ? "lightgreen"
                  : "white",
            }}
          >
            All day Wed
          </button>

          <button
            onClick={() =>
              setDays((prevstate) => ({
                ...prevstate,
                thursAm: !prevstate.thursAm,
              }))
            }
            style={{
              backgroundColor: days.thursAm === true ? "lightgreen" : "white",
            }}
          >
            Thurs am
          </button>
          <button
            onClick={() =>
              setDays((prevstate) => ({
                ...prevstate,
                thursPm: !prevstate.thursPm,
              }))
            }
            style={{
              backgroundColor: days.thursPm === true ? "lightgreen" : "white",
            }}
          >
            Thurs pm
          </button>
          <button
            onClick={() =>
              setDays((prevstate) => ({
                ...prevstate,
                thursAm: true,
                thursPm: true,
              }))
            }
            style={{
              backgroundColor:
                days.thursAm === true && days.thursPm === true
                  ? "lightgreen"
                  : "white",
            }}
          >
            All day Thurs
          </button>

          <button
            onClick={() =>
              setDays((prevstate) => ({
                ...prevstate,
                friAm: !prevstate.friAm,
              }))
            }
            style={{
              backgroundColor: days.friAm === true ? "lightgreen" : "white",
            }}
          >
            Fri am
          </button>
          <button
            onClick={() =>
              setDays((prevstate) => ({
                ...prevstate,
                friPm: !prevstate.friPm,
              }))
            }
            style={{
              backgroundColor: days.friPm === true ? "lightgreen" : "white",
            }}
          >
            Fri pm
          </button>
          <button
            onClick={() =>
              setDays((prevstate) => ({
                ...prevstate,
                friAm: true,
                friPm: true,
              }))
            }
            style={{
              backgroundColor:
                days.friAm === true && days.friPm === true
                  ? "lightgreen"
                  : "white",
            }}
          >
            All day Fri
          </button>
        </div>
      </div>
      <div className="buttonContainer">
        <button
          type="button"
          className="btn btn-primary nextButton"
          style={{ marginTop: "3rem" }}
          onClick={() => {
            handleSetDays();
            // navigate("/all-helpers");
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditHelperDays;
