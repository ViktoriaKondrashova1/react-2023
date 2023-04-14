import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../../components/searchBar/searchBar";
import CardList from "../../containers/cardList/cardList";
import { MainCardsState, SearchState } from "../../types";
import { updateValue } from "../../store/searchSlice";
import { updateCards } from "../../store/mainCardsSlice";
import { useGetCharactersQuery } from "../../api/api";
import "./main.scss";

const Main = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(
    (state: SearchState) => state.searchValue.value
  );
  const searchResult = useSelector(
    (state: MainCardsState) => state.mainCardsList.cards
  );

  const { data, isLoading, error } = useGetCharactersQuery(searchValue);

  useEffect(() => {
    dispatch(updateCards(data?.results));
  }, [data, dispatch, searchValue]);

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(updateValue(event.currentTarget.value));
    }
  };

  return (
    <div className="main">
      <div className="container">
        <SearchBar handleKeyDown={handleEnter} />
        {isLoading && <div className="main__loading">Progressing...</div>}
        {error && (
          <div className="main__error">Error: Could not fetch the data</div>
        )}
        {!error && searchResult && <CardList data={searchResult} />}
      </div>
    </div>
  );
};

export default Main;
