import Router from "./router";
import Html from "./html";
import Header from "./containers/header/header";

const App = () => {
  return (
    <Html>
      <>
        <Header />
        <main>
          <Router />
        </main>
      </>
    </Html>
  );
};

export default App;
