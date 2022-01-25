import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actionBuyCake from "../redux/cake/cakeActions";

function AdvancedCakeContainer() {
  const [number, setNumber] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(actionBuyCake(number))}>Buy Cake</button>
    </div>
  );
}

export default AdvancedCakeContainer;
