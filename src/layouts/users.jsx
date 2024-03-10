import React, { useEffect } from "react";
import api from "../api/index";
import { useParams } from "react-router-dom";
import { useState } from "react";
import UserPage from "../components/userPage";
import UsersList from "../components/usersList";

const Users = () => {
    const params = useParams();
    const { userId } = params;
    return <>{userId ? <UserPage userId={userId} /> : <UsersList />}</>;
};

export default Users;
