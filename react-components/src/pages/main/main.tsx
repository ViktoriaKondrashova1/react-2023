import { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/searchBar";
import CardList from "../../containers/cardList/cardList";
import Modal from "../../components/modal/modal";
import { cardProps } from "../../types";
import "./main.scss";

const url = "https://rickandmortyapi.com/api/character";

const mockData = {
  name: "Rick Sanchez",
  image:
    "https://i.pinimg.com/564x/02/2b/bb/022bbb45b3257c3c494a1de93179bd8a.jpg",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: "Earth",
  location: "Earth",
  created: "2017-11-04T18:48:46.250Z",
};

const Main = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const [searchResult, setSearchResult] = useState<cardProps[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch(searchValue ? `${url}?name=${searchValue}` : url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setSearchResult(data.results);
      });
  }, [searchValue]);

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setSearchValue(event.currentTarget.value);
    }
  };

  return (
    <div className="main">
      <div className="container">
        <SearchBar handleKeyDown={handleEnter} />
        <CardList data={searchResult} />
        <Modal data={mockData} isOpen={isOpen} />
      </div>
    </div>
  );
};

export default Main;
