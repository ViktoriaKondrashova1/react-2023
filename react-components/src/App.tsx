import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import About from "./pages/about/about";
import Page404 from "./pages/404/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
