import { useState } from "react";
import Card from "../../components/card/card";
import Modal from "../../components/modal/modal";
import { CardListProps, CharacterProps } from "../../types";
import "./cardList.scss";

const url = "https://rickandmortyapi.com/api/character";

const CardList = (props: CardListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<CharacterProps | null>(null);

  const openModal = (id: number | undefined) => {
    fetch(`${url}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setModalData(data);
      });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData(null);
  };

  return (
    <div className="card-list__cards" data-testid="cards-list">
      {props.data.map((item) => {
        return (
          <Card
            name={item.name}
            key={item.id}
            image={item.image}
            status={item.status}
            handleClick={() => openModal(item.id)}
          />
        );
      })}
      {modalData && (
        <Modal data={modalData} isOpen={isOpen} handleClick={closeModal} />
      )}
    </div>
  );
};

export default CardList;
