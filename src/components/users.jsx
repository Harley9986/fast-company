import React, { useState } from "react";
import User from "./user";

const Users = ({ users, onDelete }) => {
  return (
    <>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Избранное</th>
              <th scope="col">Оценка</th>
            </tr>
          </thead>
          <User users={users} onDelete={onDelete} />
        </table>
      )}
    </>
  );
};

export default Users;
