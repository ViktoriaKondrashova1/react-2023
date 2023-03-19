import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import About from "./pages/about/about";
import Page404 from "./pages/404/404";
import Form from "./pages/form/form";
import Header from "./containers/header/header";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Form />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </>
    );
  }
}

export default App;
