import { Outlet } from "react-router-dom";
import Navbar from '../components/NavBar.js';
const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default Home;