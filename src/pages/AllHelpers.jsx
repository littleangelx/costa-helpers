import { useSelector } from "react-redux";
import HelperRow from "../components/HelperRow";

const AllHelpers = () => {
  const helpers = useSelector((state) => state.helpers.helpers);
  return (
    <div>
      {helpers.map((helper) => (
        <HelperRow key={helper.id} helper={helper} />
      ))}
    </div>
  );
};

export default AllHelpers;
