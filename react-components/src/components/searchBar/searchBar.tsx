import "./searchBar.scss";

interface SearchBarProps {
  handleChange?: () => void;
}

function SearchBar(props: SearchBarProps) {
  return (
    <div className="search">
      <input
        type="search"
        className="search__input"
        placeholder="Search..."
        onChange={props.handleChange}
      />
      <button type="submit" className="search__btn">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
