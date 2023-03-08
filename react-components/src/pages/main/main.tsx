import SearchBar from "../../components/searchBar/searchBar";
import Card from "../../components/card/card";
import Data from "../../assets/data.json";
import "./main.scss";

function Main() {
  return (
    <div className="main">
      <div className="container">
        <SearchBar />
        <div className="main__cards">
          {Data.map((item, index) => {
            return (
              <Card
                title={item.title}
                key={index}
                image={item.image}
                link={item.link}
                author={item.author}
                raiting={item.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
