import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetups from "./pages/NewMeetups";
import Layout from "./components/layout/Layout";
import MainNav from "./components/layout/MainNav";
function App() {
  return (
    <BrowserRouter>
      <MainNav />
      <Layout>
        <Routes>
          <Route exact path="/" element={<AllMeetups />} />
          <Route exact path="/newMeetups" element={<NewMeetups />} />
          <Route exact path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
