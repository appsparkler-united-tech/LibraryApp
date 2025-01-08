import { MemoryRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import MePage from "../ProfilePage/MePage";

export default {
  title: "Pages/LoginPage",
  component: LoginPage,
};

export const Default = () => (
  <MemoryRouter initialEntries={["/login"]}>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/me" element={<MePage />} />
    </Routes>
  </MemoryRouter>
);
