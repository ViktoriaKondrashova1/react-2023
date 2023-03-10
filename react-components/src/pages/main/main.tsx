import React from "react";
import SearchBar from "../../components/searchBar/searchBar";
import Card from "../../components/card/card";
import data from "../../assets/data.json";
import "./main.scss";

interface MainState {
  value: string;
}

// eslint-disable-next-line @typescript-eslint/ban-types
class Main extends React.Component<{}, MainState> {
  constructor(props: React.Component) {
    super(props);
    this.state = {
      value: (localStorage.getItem("search")
        ? localStorage.getItem("search")
        : "")!,
    };
  }
  componentWillUnmount(): void {
    const input = document.querySelector(".search__input") as HTMLInputElement;
    localStorage.setItem("search", input.value);
  }
  render() {
    return (
      <div className="main">
        <div className="container">
          <SearchBar value={this.state.value} />
          <div className="main__cards">
            {data.map((item) => {
              return (
                <Card
                  title={item.title}
                  key={item.id}
                  image={item.image}
                  link={item.link}
                  author={item.author}
                  raiting={item.rating}
                  time={item.time}
                  veg={item.veg}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
