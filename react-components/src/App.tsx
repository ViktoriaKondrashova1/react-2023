import Router from "./router";
import Header from "./containers/header/header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Router />
      </main>
    </>
  );
};

export default App;
