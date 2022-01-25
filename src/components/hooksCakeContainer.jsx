import { useSelector, useDispatch } from "react-redux";
import actionBuyCake from "../redux/cake/cakeActions";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Num of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(actionBuyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
