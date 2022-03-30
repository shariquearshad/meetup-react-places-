import { Route, Routes, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainNavigation from "./components/Layout/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} exact={true}></Route>
        <Route path="/new-meetup" element={<NewMeetupsPage />}></Route>
        <Route path="/favourite" element={<Favorites />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
