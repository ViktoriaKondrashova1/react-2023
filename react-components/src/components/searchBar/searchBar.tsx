import { SearchBarProps } from "../../types";
import "./searchBar.scss";

const SearchBar = (props: SearchBarProps) => {
  return (
    <div className="search">
      <input
        type="search"
        className="search__input"
        placeholder="Search..."
        defaultValue={props.value}
        onKeyDown={props.handleKeyDown}
        data-testid="search-input"
      />
    </div>
  );
};

export default SearchBar;
