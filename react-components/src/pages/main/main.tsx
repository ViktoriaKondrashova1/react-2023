import { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/searchBar";
import CardList from "../../containers/cardList/cardList";
import { cardProps } from "../../types";
import "./main.scss";

const url = "https://www.flickr.com/services/rest/?method=flickr.photos.search";
const apiKey = "8db6b632c8c3736db020e4e350b80d78";
const perPage = "12";

const Main = () => {
  const [searchValue, setSearchValue] = useState<string>("cat");
  const [searchResult, setSearchResult] = useState<cardProps[]>([]);

  useEffect(() => {
    fetch(
      `${url}&api_key=${apiKey}&tags=${searchValue}&per_page=${perPage}&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.photos.photo);
        setSearchResult(data.photos.photo);
      });
  }, [searchValue]);

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.currentTarget.value && event.key === "Enter") {
      setSearchValue(event.currentTarget.value);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <SearchBar handleKeyDown={handleEnter} />
        <CardList data={searchResult} />
      </div>
    </div>
  );
};

export default Main;
