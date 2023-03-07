import "./searchBar.scss";

function SearchBar() {
  return (
    <div className="search">
      <input type="search" className="search__input" placeholder="Search..." />
      <button className="search__btn">Search</button>
    </div>
  );
}

export default SearchBar;
