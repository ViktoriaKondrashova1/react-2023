import { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/searchBar";
import CardList from "../../containers/cardList/cardList";
import { CharacterProps } from "../../types";
import "./main.scss";

const url = "https://rickandmortyapi.com/api/character";

const Main = () => {
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem("search") || ""
  );
  const [searchResult, setSearchResult] = useState<CharacterProps[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(searchValue ? `${url}?name=${searchValue}` : url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data");
          }
          return res.json();
        })
        .then((data) => {
          setSearchResult(data.results);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
    }, 500);
  }, [searchValue]);

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      localStorage.setItem("search", event.currentTarget.value);
      setSearchResult(null);
      setIsLoading(true);
      setError(null);
      setSearchValue(event.currentTarget.value);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <SearchBar handleKeyDown={handleEnter} value={searchValue} />
        {isLoading && <div className="main__loading">Progressing...</div>}
        {error && <div className="main__error">Error: {error.message}</div>}
        {searchResult && <CardList data={searchResult} />}
      </div>
    </div>
  );
};

export default Main;
