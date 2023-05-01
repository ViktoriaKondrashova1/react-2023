import Main from "./pages/main/main";
import About from "./pages/about/about";
import Page404 from "./pages/404/404";
import FormPage from "./pages/formPage/formPage";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Router;
