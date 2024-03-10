import React from "react";
import NavBar from "./components/navBar";
import UsersList from "./components/usersList";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Users from "./layouts/users";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={Users} />
                {/* <Redirect to="/" /> */}
            </Switch>
        </>
    );
}

export default App;
