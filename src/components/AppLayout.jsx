import { Link, Outlet } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const AppLayout = () => {
  return (
    <>
      <div className="topBar">
        <h1>Costa del Down Under (Costa 2024)</h1>
      </div>
      <Menu className="menu">
        <Link to="/add-helper">Add Helper</Link>
        {/* <Link to="/available-jobs">Available Jobs</Link> */}
        <Link to="/all-helpers">All Helpers</Link>
        <h3 className="heading">Job Allocation</h3>
        <Link to="/allocation/wed">Wednesday</Link>
        <Link to="/allocation/thurs">Thursday</Link>
        <Link to="/allocation/fri">Friday</Link>
        <h3 className="heading">Timetable</h3>
        <Link to="/timetable/wed">Wednesday</Link>
        <Link to="/timetable/thurs">Thursday</Link>
        <Link to="/timetable/fri">Friday</Link>
        {/* <h3 className="heading"></h3>
        <Link>Jobs for Helpers</Link> */}
      </Menu>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AppLayout;
