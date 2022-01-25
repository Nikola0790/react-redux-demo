import actionIceCream from "../redux/iceCream/iceCreamActions";
import { useSelector, useDispatch } from "react-redux";

function IceCreamContainer() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Numbers of IceCreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(actionIceCream())}>Buy IceCream</button>
    </div>
  );
}

export default IceCreamContainer;
