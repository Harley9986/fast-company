import React, { useSyncExternalStore } from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({ users, onDelete }) => {
  return (
    <tbody>
      {users.map((user) => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>
            {user.qualities.map((item) => (
              <Qualitie color={item.color} _id={item._id} name={item.name} />
            ))}
          </td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>
            <BookMark bookmark={user.bookmark} id={user._id} />
          </td>
          <td>{user.rate} /5</td>
          <td>
            <button
              onClick={() => onDelete(user._id)}
              className="btn btn-danger"
            >
              delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default User;
