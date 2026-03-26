import { Navbar } from "./Components/NavBar";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Movies } from "./Pages/Movies";
import { MovieDetails } from "./Pages/MovieDetails";
import { Favorite } from "./Pages/Favorite";
import { MyBookings } from "./Pages/MyBookings";

import { Toaster } from "react-hot-toast";
import { Footer } from "./Components/Footer";
const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");
  return (
    <div>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<MovieDetails />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;
