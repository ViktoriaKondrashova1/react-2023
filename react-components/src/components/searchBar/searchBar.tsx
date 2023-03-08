import React from "react";
import "./searchBar.scss";

interface SearchBarProps {
  handleChange?: () => void;
  value: string;
}

class SearchBar extends React.Component<SearchBarProps> {
  constructor(props: SearchBarProps) {
    super(props);
  }
  render() {
    return (
      <div className="search">
        <input
          type="search"
          className="search__input"
          placeholder="Search..."
          defaultValue={this.props.value}
          onChange={this.props.handleChange}
        />
        <button type="submit" className="search__btn">
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
