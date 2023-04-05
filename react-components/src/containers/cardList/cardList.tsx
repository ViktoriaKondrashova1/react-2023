import { useState } from "react";
import Card from "../../components/card/card";
import Modal from "../../components/modal/modal";
import { CardListProps, CharacterProps } from "../../types";
import "./cardList.scss";

const CardList = (props: CardListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<CharacterProps>({
    name: "",
    image: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: { name: "", url: "" },
    location: { name: "", url: "" },
    created: "",
  });

  const openModal = (item: CharacterProps) => {
    setModalData(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return !props.data ? (
    <div className="card-list__error">The cards are not found!</div>
  ) : (
    <div className="card-list__cards" data-testid="cards-list">
      {props.data.map((item) => {
        return (
          <Card
            name={item.name}
            key={item.id}
            image={item.image}
            status={item.status}
            handleClick={() => openModal(item)}
          />
        );
      })}
      <Modal data={modalData} isOpen={isOpen} handleClick={closeModal} />
    </div>
  );
};

export default CardList;
