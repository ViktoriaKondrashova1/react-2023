import { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/searchBar";
import CardList from "../../containers/cardList/cardList";
import { cardProps } from "../../types";
import "./main.scss";

const url = "https://www.flickr.com/services/rest/?method=flickr.photos.search";
const apiKey = "8db6b632c8c3736db020e4e350b80d78";
const tags = "cat";
const perPage = "12";

const Main = () => {
  const [searchResult, setSearchResult] = useState<cardProps[]>([]);

  useEffect(() => {
    fetch(
      `${url}&api_key=${apiKey}&tags=${tags}&per_page=${perPage}&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.photos.photo);
        setSearchResult(data.photos.photo);
      });
  }, []);

  return (
    <div className="main">
      <div className="container">
        <SearchBar />
        <CardList data={searchResult} />
      </div>
    </div>
  );
};

export default Main;
