import { Route, Routes } from "react-router-dom";
import { DashBoard } from "../pages/dashBoard";
import { ContactUs } from "../pages/contactUs";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};
