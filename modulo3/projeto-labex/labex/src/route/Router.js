import { BrowserRouter, Switch, Route } from "react-router-dom";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import HomePage from '../pages/HomePage'
import ListTripsPage from "../pages/ListTripsPage";
import LoginPage from "../pages/LoginPage";
import {Header} from "../styles"
import AdminHomePage from "../pages/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage";

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Header>
                    <h1>Viagens do Sonho</h1>
                </Header>
                <Switch>
                    <Route exact path={"/"}>
                        <HomePage/>
                    </Route>

                    <Route exact path={"/trips/:list"}>
                        <ListTripsPage/>
                    </Route>

                    <Route exact path={"/trips-application"}>
                        <ApplicationFormPage/>
                    </Route>

                    <Route exact path={"/login"}>
                        <LoginPage/>
                    </Route>

                    <Route exact path={"/admin-trips-list"}>
                        <AdminHomePage/>
                    </Route>

                    <Route exact path={"/admin-trips-create"}>
                        <CreateTripPage/>
                    </Route>

                    <Route exact path={"/admin/trips/:id"}>
                        <TripDetailsPage/>
                    </Route>
                    
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Router;