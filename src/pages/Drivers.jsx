import LiftAllocationItem from "./LiftAllocationItem";
import LiftTripAllocationItem from "./LiftTripAllocationItem.jsx";

const Drivers = () => {
  return (
    <div className="columnContainer">
      <h3>Lifts to Costa and for Trips</h3>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div>
          <h4>Lifts to and from church on Wednesday</h4>
          <LiftAllocationItem day="wed" />
        </div>
        <div>
          <h4>Wednesday trip drivers</h4>
          <LiftTripAllocationItem day="liftsTripWed" />
        </div>
      </div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div>
          <h4>Lifts to and from church on Thursday</h4>
          <LiftAllocationItem day="thurs" />
        </div>
        <div>
          <h4>Thursday trip drivers</h4>
          <LiftTripAllocationItem day="liftsTripThurs" />
        </div>
      </div>
      <h4>Lifts to and from church on Friday</h4>
      <div style={{ display: "flex", gap: "2rem" }}>
        <LiftAllocationItem day="fri" />
        <div></div>
      </div>
    </div>
  );
};

export default Drivers;
