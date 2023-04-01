import SearchBar from "../../components/searchBar/searchBar";
import Card from "../../components/card/card";
import data from "../../assets/data.json";
import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <SearchBar />
        <div className="main__cards" data-testid="cards-list">
          {data.map((item) => {
            return (
              <Card
                title={item.title}
                key={item.id}
                image={item.image}
                link={item.link}
                author={item.author}
                raiting={item.rating}
                time={item.time}
                veg={item.veg}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
