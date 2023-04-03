import Card from "../../components/card/card";
import data from "../../assets/data.json";
import "./cardList.scss";

const CardList = () => {
  return (
    <div className="card-list__cards" data-testid="cards-list">
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
  );
};

export default CardList;
