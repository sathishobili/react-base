import React from "react";
import { useAppSelector } from "../../../../core/state/hooks";

const UserList = () => {
  const users = useAppSelector((state) => state.users);
  return (
    <div>
      UserList
      <table>
        <tbody>
          {users.map(({ id, name, email }, i) => (
            <tr key={i}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>
                <button>Delete</button>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
