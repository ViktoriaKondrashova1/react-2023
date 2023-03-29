import React from "react";
import "./searchBar.scss";

interface SearchBarState {
  value: string;
}

type SearchBarProps = {
  [key: string]: never;
};

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      value: localStorage.getItem("search") || "",
    };
  }
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };
  componentWillUnmount(): void {
    localStorage.setItem("search", this.state.value);
  }
  render() {
    return (
      <div className="search">
        <input
          type="search"
          className="search__input"
          placeholder="Search..."
          defaultValue={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit" className="search__btn">
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
