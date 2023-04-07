import { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/searchBar";
import CardList from "../../containers/cardList/cardList";
import { CharacterProps } from "../../types";
import "./main.scss";

const url = "https://rickandmortyapi.com/api/character";

const Main = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const [searchResult, setSearchResult] = useState<CharacterProps[]>([]);
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
          setError(error);
          setIsLoading(false);
        });
    }, 500);
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
        {isLoading && <div className="main__loading">Progressing...</div>}
        <CardList data={searchResult} error={error} />
      </div>
    </div>
  );
};

export default Main;
