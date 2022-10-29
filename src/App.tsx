import { useState } from "react";
import Profile from "./components/Profile/Profile";
//import Badge from "./components/Badge/Badge";
// import Sidebar from "./templates/Sidebar";
// import Header from "./templates/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      {/* <Header />
      <Sidebar /> */}
      <Routes>
        {/* <Profile /> */}
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/BadgeView" element={<Badge />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
