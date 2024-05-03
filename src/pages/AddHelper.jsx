import { useDispatch, useSelector } from "react-redux";
import { helperActions } from "../store/helperSlice";
import { useNavigate } from "react-router-dom";

const AddHelper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const counter = useSelector((state) => state.helpers.helpers).length;

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    dispatch(
      helperActions.addHelperDetails({ id: counter, ...Object.fromEntries(fd) })
    );
    navigate(`/helper-days/${counter}`);
  };

  return (
    <div>
      <h3>Helper Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <input
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Enter phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile phone number</label>
          <input
            className="form-control"
            id="mobile"
            name="mobile"
            placeholder="Enter mobile number"
          />
        </div>
        <button type="submit" className="btn btn-primary nextButton">
          Next
        </button>
      </form>
    </div>
  );
};

export default AddHelper;
