import { SearchBarProps, SearchState } from "../../types";
import { useSelector } from "react-redux";
import "./searchBar.scss";

const SearchBar = (props: SearchBarProps) => {
  const searchValue = useSelector(
    (state: SearchState) => state.searchValue.value
  );

  return (
    <div className="search">
      <input
        type="search"
        className="search__input"
        placeholder="Search..."
        defaultValue={searchValue}
        onKeyDown={props.handleKeyDown}
        data-testid="search-input"
      />
    </div>
  );
};

export default SearchBar;
