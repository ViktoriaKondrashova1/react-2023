import SearchBar from "../../components/searchBar/searchBar";
import CardList from "../../containers/cardList/cardList";
import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <SearchBar />
        <CardList />
      </div>
    </div>
  );
};

export default Main;
