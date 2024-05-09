import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Timetable = () => {
  const { day } = useParams();
  const jobAllocation = useSelector(
    (state) => state.allocationJob.jobAllocation
  )[day];

  const helperPref = useSelector((state) => state.helpers.helperJobPreferences);
  // const helperDays = useSelector((state) => state.helpers.helperDays);
  // const [driversAm, setDriversAm] = useState(() => new Set());
  // const [driversPm, setDriversPm] = useState(() => new Set());
  // const [tripDrivers, setTripDrivers] = useState(() => new Set());

  console.log(helperPref);

  // useEffect(() => {
  //   helperPref.forEach((helper) => {
  //     const foundHelper = helperDays
  //       .filter((item) => item.name === helper.helperName)
  //       .map((item) => ({ am: item[day + "Am"], pm: item[day + "Pm"] }));

  //     console.log(foundHelper);

  //     if (helper[day + "Lifts"] === "on" && foundHelper[0].am) {
  //       setDriversAm((prev) => {
  //         return new Set(prev).add(helper.helperName);
  //       });
  //     }

  //     if (helper[day + "Lifts"] === "on" && foundHelper[0].pm) {
  //       setDriversPm((prev) => {
  //         return new Set(prev).add(helper.helperName);
  //       });
  //     }

  //     if (helper[day + "LiftsTrip"] === "on") {
  //       setTripDrivers((prev) => {
  //         return new Set(prev).add(helper.helperName);
  //       });
  //     }
  //   });
  // }, []);

  return (
    <div>
      <h3 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Timetable for{" "}
        {day === "wed"
          ? "Wednesday 14th August"
          : day === "thurs"
          ? "Thursday 15th August"
          : "Friday 16th August"}
      </h3>
      <div className="timetableContainer">
        <div>
          <h4>8.30: Team arrive: briefing, breakfast, prayer and praise</h4>

          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Kitchen assistants:</p>
            <p>
              {jobAllocation["Kitchen Assistants"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
        </div>
        <div>
          <h4>9.15</h4>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Lifts:</p>
            <p>
              {jobAllocation["Morning Lifts"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
        </div>
        <div>
          <h4>9.45: Guests arrive</h4>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Car park stewards:</p>
            <p>
              {jobAllocation["Morning Car Park Stewards"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Welcome desk:</p>
            <p>
              {jobAllocation["Welcome Desk"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Morning coats:</p>
            <p>
              {jobAllocation["Morning Coats"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Head waiter:</p>
            <p>
              {jobAllocation["Head Waiter"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Arrival caf&eacute; servers:</p>
            <p>
              {jobAllocation["Arrival Cafe Servers"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Welcomers:</p>
            <p>
              {jobAllocation["Welcomers"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Cashier:</p>
            <p>
              {jobAllocation["Cashier"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
        </div>
        <div>
          <h4>10:15: Welcome and introduction to the day</h4>
        </div>
        <div>
          <h4>10:30</h4>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Workshop lead:</p>
            <p>
              {jobAllocation["Workshop Lead"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Workshop helpers:</p>
            <p>
              {jobAllocation["Workshop Helpers"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Activities lead:</p>
            <p>
              {jobAllocation["Activities Lead"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Activities helpers:</p>
            <p>
              {jobAllocation["Activities Helpers"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Spa:</p>
            <p>
              {jobAllocation["Spa"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Photographer:</p>
            <p>
              {jobAllocation["Photographer"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Caf&eacute;:</p>
            <p>
              {jobAllocation["Cafe"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Stalls supervisor:</p>
            <p>
              {jobAllocation["Stalls Supervisor"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Stalls Helpers:</p>
            <p>
              {jobAllocation["Stalls Helpers"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
        </div>
        <div>
          <h4>11.45</h4>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Serve sherry:</p>
            <p>
              {jobAllocation["Serve Sherry"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
        </div>
        <div>
          <h4>11.50</h4>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>
              Lunch servers (need to be ready in dining room):
            </p>
            <p>
              {jobAllocation["Lunch servers"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Maitre d':</p>
            <p>
              {jobAllocation["Maitre d'"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
        </div>
        <div>
          <h4>12.00: Guests make their way into dining room</h4>
        </div>
        <div>
          <h4>12.05</h4>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Thought for the day:</p>
            <p>
              {jobAllocation["Thought for the Day"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
        </div>
        <div>
          <h4>
            12.15: Lunch{" "}
            {day !== "fri" &&
              "(guests plus helpers going out or helping in cinema)"}
          </h4>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Wash up in kitchen:</p>
            <p>
              {jobAllocation["Wash up Kitchen"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Wash up back of church:</p>
            <p>
              {jobAllocation["Wash up Back of Church"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
          <div className="jobContainer">
            <p style={{ fontWeight: "bold" }}>Washing up trolley:</p>
            <p>
              {jobAllocation["Washing up Trolley"]?.join(", ") || (
                <span style={{ color: "red" }}>NO ONE!</span>
              )}
            </p>
          </div>
        </div>
        <div>
          <h4>1.00: Notices </h4>
        </div>

        {day !== "fri" && (
          <>
            <div>
              <h4>1.15: Break and board coach</h4>
              <div className="jobContainer">
                <p style={{ fontWeight: "bold" }}>Coats:</p>
                <p>
                  {jobAllocation["Trip Coats"]?.join(", ") || (
                    <span style={{ color: "red" }}>NO ONE!</span>
                  )}
                </p>
              </div>
              <div className="jobContainer">
                <p style={{ fontWeight: "bold" }}>Ushers (need 6)</p>
              </div>
            </div>
            <div>
              <h4>1.30</h4>
              <div className="jobContainer">
                <p style={{ fontWeight: "bold" }}>Trip lifts:</p>
                <p>
                  {jobAllocation["Trip Lifts"]?.join(", ") || (
                    <span style={{ color: "red" }}>NO ONE!</span>
                  )}
                </p>
              </div>
              <div className="jobContainer">
                <p style={{ fontWeight: "bold" }}>Trip escorts:</p>
                <p>
                  {jobAllocation["Trip Escorts"]?.join(", ") || (
                    <span style={{ color: "red" }}>NO ONE!</span>
                  )}
                </p>
              </div>
              <div className="jobContainer">
                <p style={{ fontWeight: "bold" }}>Film organiser:</p>
                <p>
                  {jobAllocation["Film Lead"]?.join(", ") || (
                    <span style={{ color: "red" }}>NO ONE!</span>
                  )}
                </p>
              </div>
              <div className="jobContainer">
                <p style={{ fontWeight: "bold" }}>Film helpers:</p>
                <p>
                  {jobAllocation["Film Helpers"]?.join(", ") || (
                    <span style={{ color: "red" }}>NO ONE!</span>
                  )}
                </p>
              </div>
              <div>
                <h4>3.00</h4>
                <div className="jobContainer">
                  <p style={{ fontWeight: "bold" }}>Serve ice creams</p>
                  <p>
                    {jobAllocation["Serve Ice Creams"]?.join(", ") || (
                      <span style={{ color: "red" }}>NO ONE!</span>
                    )}
                  </p>
                </div>
                <div className="jobContainer">
                  <p style={{ fontWeight: "bold" }}>
                    Set up afternoon refreshments:
                  </p>
                  <p>
                    {jobAllocation["Set up Afternoon Tea"]?.join(", ") || (
                      <span style={{ color: "red" }}>NO ONE!</span>
                    )}
                  </p>
                </div>
              </div>
              <div>
                <h4>4.15</h4>
                <div className="jobContainer">
                  <p style={{ fontWeight: "bold" }}>
                    Serve refreshments for guests:{" "}
                  </p>
                  <p>
                    <span>All available helpers</span>{" "}
                  </p>
                </div>
              </div>
              <div>
                <h4>4.45: Quiz results, draw and announcements</h4>
              </div>
            </div>
          </>
        )}
        {day === "fri" && (
          <div>
            <h4>1.30</h4>
            <div className="jobContainer">
              <p style={{ fontWeight: "bold" }}>
                Clear hall and set up for afternoon activities
              </p>
              <p>
                {jobAllocation[
                  "Clearing and Setting up Friday Afternoon Activities"
                ]?.join(", ") || <span style={{ color: "red" }}>NO ONE!</span>}
              </p>
            </div>
            <h4>1.45: Guests move into church</h4>
            <h4>2.00: Friday afternoon activities/entertainment</h4>
            <h4>3.00</h4>
            <div className="jobContainer">
              <p style={{ fontWeight: "bold" }}>Set up afternoon tea:</p>
              <p>
                {jobAllocation["Set up Afternoon Tea"]?.join(", ") || (
                  <span style={{ color: "red" }}>NO ONE!</span>
                )}
              </p>
            </div>
            <div>
              <h4>4.40: Quiz results, draw and announcements</h4>
            </div>
          </div>
        )}
        <h4>5.00: Depart</h4>
        <div className="jobContainer">
          <p style={{ fontWeight: "bold" }}>Coats:</p>
          <p>
            {jobAllocation["Evening Coats"]?.join(", ") || (
              <span style={{ color: "red" }}>NO ONE!</span>
            )}
          </p>
        </div>
        <div className="jobContainer">
          <p style={{ fontWeight: "bold" }}>Lifts:</p>
          <p>
            {jobAllocation["Evening Lifts"]?.join(", ") || (
              <span style={{ color: "red" }}>NO ONE!</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
