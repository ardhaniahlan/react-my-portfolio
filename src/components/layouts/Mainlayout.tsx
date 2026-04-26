import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";

export const Mainlayout = () => {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
