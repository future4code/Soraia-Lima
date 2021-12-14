import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>
                <Route exact path={"/cadastro"}>
                    <RegisterPage />
                </Route>
                <Route exact path={"/"}>
                    <FeedPage />
                </Route>
                <Route exact path={"/post"}>
                    <PostPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>

    )
}

export default Router