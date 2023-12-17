import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "./../pages/Home/home";
import About from "./../pages/About/about";
import Appointment from "./../pages/Appointment/appointment";
import Blog from "./../pages/Blog/blog";
import Contact from "./../pages/Contact/contact";
import Products from "./../pages/Products/products";
import Team from "./../pages/Team/team";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={Root}>
      <Route path="" element={Home}></Route>
      <Route path="about" element={About}></Route>
      <Route path="Appointment" element={Appointment}></Route>
      <Route path="Blog" element={Blog}></Route>
      <Route path="Contact" element={Contact}></Route>
      <Route path="Products" element={Products}></Route>
      <Route path="Team" element={Team}></Route>
      <Route path="*" element={<div className="page">Page Not Found</div>} />
    </Route>
  )
);

export default router;
