import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { helperActions } from "../store/helperSlice";

const EditHelper = () => {
  const { helperId } = useParams();

  const helperDetails = useSelector((state) => state.helpers.helpers).filter(
    (item) => item.id === parseInt(helperId)
  )[0];

  localStorage.clear();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    dispatch(
      helperActions.editHelperDetails({
        id: parseInt(helperId),
        ...Object.fromEntries(fd),
      })
    );
    navigate(`/edit-days/${helperId}`);
  };

  console.log(helperDetails);
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
            defaultValue={helperDetails.name}
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
            defaultValue={helperDetails.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <input
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Enter phone number"
            defaultValue={helperDetails.phone}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile phone number</label>
          <input
            className="form-control"
            id="mobile"
            name="mobile"
            placeholder="Enter mobile number"
            defaultValue={helperDetails.mobile}
          />
        </div>
        <button type="submit" className="btn btn-primary nextButton">
          Next
        </button>
      </form>
    </div>
  );
};

export default EditHelper;
