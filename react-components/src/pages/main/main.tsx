import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../../components/searchBar/searchBar";
import CardList from "../../containers/cardList/cardList";
import { MainCardsState, SearchState } from "../../types";
import { updateValue } from "../../store/searchSlice";
import { updateCards } from "../../store/mainCardsSlice";
import { useGetCharactersQuery, useSearchByNameQuery } from "../../api/api";
import "./main.scss";

const Main = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(
    (state: SearchState) => state.searchValue.value
  );
  const searchResult = useSelector(
    (state: MainCardsState) => state.mainCardsList.cards
  );

  const { data, isLoading } = useGetCharactersQuery();
  // const { data, isLoading } = useSearchByNameQuery(searchValue);

  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!searchValue) {
      dispatch(updateCards(data?.results));
    }
    // setTimeout(() => {
    // fetch(searchValue ? `${url}?name=${searchValue}` : url)
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw Error("Could not fetch the data");
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     dispatch(updateCards(data.results));
    //     setIsLoading(false);
    //     setError(null);
    //   })
    //   .catch((error) => {
    //     setIsLoading(false);
    //     setError(error);
    //   });
    // }, 500);
  }, [data, dispatch, searchValue]);

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(updateCards(null));
      setError(null);
      dispatch(updateValue(event.currentTarget.value));
    }
  };

  return (
    <div className="main">
      <div className="container">
        <SearchBar handleKeyDown={handleEnter} />
        {isLoading && <div className="main__loading">Progressing...</div>}
        {error && <div className="main__error">Error: {error.message}</div>}
        {searchResult && <CardList data={searchResult} />}
      </div>
    </div>
  );
};

export default Main;
