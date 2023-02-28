import React from "react";
import { createElement } from "react";
import { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (usersId) => {
    setUsers((prevState) => prevState.filter((user) => user !== usersId));
  };

  const formatTable = () => {
    return users.length === 0 ? (
      <span className={getBadgeClasses()}>{formatCount()}</span>
    ) : (
      <>
        {" "}
        <span className={getBadgeClasses()}>{formatCount()}</span>
        <table className="table table-striped-columns table-info table-bordered table-sm">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">{renderPhrase(users)}</tbody>
        </table>
      </>
    );
  };

  const formatCount = () => {
    if (users.length === 0) {
      return "Никто с тобой не тусанет";
    } else if (5 > users.length && users.length > 1) {
      return `${users.length} человека тусанут с тобой`;
    } else {
      return `${users.length} человек тусанет с тобой`;
    }
  };
  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += users.length === 0 ? "bg-danger" : "bg-primary";
    return classes;
  };

  const renderPhrase = (usersId) => {
    const classes = "badge m-1 text-bg-";
    return usersId.map((user) => (
      <>
        <tr key={user.id}>
          <th key={user.id}>{user.name}</th>
          <th key={user.id}>
            {user.qualities.map((el) => (
              <span key={user.id} className={classes + el.color}>
                {el.name}
              </span>
            ))}
          </th>
          <th key={user.id}>{user.profession.name}</th>
          <th key={user.id}>{user.completedMeetings}</th>
          <th key={user.id}>{user.rate}/5</th>
          <th key={user.id}>
            <button
              key={user.id}
              className="btn btn-danger btn-sm m-1"
              onClick={() => handleDelete(user)}
            >
              Delete
            </button>
          </th>
        </tr>
      </>
    ));
  };

  return <>{formatTable()}</>;
};

export default Users;
