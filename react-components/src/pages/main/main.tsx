import { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/searchBar";
import CardList from "../../containers/cardList/cardList";
import { CharacterProps } from "../../types";
import "./main.scss";

const url = "https://rickandmortyapi.com/api/character";

const Main = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const [searchResult, setSearchResult] = useState<CharacterProps[]>([]);

  useEffect(() => {
    fetch(searchValue ? `${url}?name=${searchValue}` : url)
      .then((res) => res.json())
      .then((data) => {
        setSearchResult(data.results);
      });
  }, [searchValue]);

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
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
