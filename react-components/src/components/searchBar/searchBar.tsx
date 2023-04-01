import React, { useState, useEffect } from "react";
import "./searchBar.scss";

const SearchBar = () => {
  const [value, setValue] = useState<string>(
    localStorage.getItem("search") || ""
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("search", value);
  }, [value]);

  return (
    <div className="search">
      <input
        type="search"
        className="search__input"
        placeholder="Search..."
        defaultValue={value}
        onChange={handleChange}
      />
      <button type="submit" className="search__btn">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
