import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  actionRequest,
  actionSuccess,
  actionFailure,
} from "../redux/user/userActions";

function UserContainer() {
  const dispacth = useDispatch();
  const users = useSelector((state) => state.user.users);

  const fetchUsers = () => {
    return (dispacth) => {
      dispacth(actionRequest());
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          const users = response.data;
          dispacth(actionSuccess(users));
        })
        .catch((error) => {
          dispacth(actionFailure(error.message));
        });
    };
  };

  useEffect(() => {
    dispacth(fetchUsers());
  }, []);

  return (
    <div>
      {users.map((item) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
}

export default UserContainer;
