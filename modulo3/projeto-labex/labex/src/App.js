
// import AdminHomePage from "./pages/AdminHomePage";
// import ApplicationFormPage from "./pages/ApplicationFormPage";
// import CreateTripPage from "./pages/CreateTripPage";
// import HomePage from "./pages/HomePage";
// import ListTripsPage from "./pages/ListTripsPage";
// import LoginPage from "./pages/LoginPage";
// import TripDetailsPage from "./pages/TripDetailsPage";

import Router from './route/Router'
import {GlobalStyle} from './styles'

function App() {
  return (
    <div >
      <GlobalStyle/>
      {/* <p>OIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIi</p>
      <HomePage/>
      <ListTripsPage/>
      <ApplicationFormPage/>
      <LoginPage/>
      <AdminHomePage/>
      <TripDetailsPage/>
      <CreateTripPage/> */}
      <Router/>
    </div>
  );
}

export default App;
