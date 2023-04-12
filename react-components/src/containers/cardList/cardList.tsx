import { useState } from "react";
import Card from "../../components/card/card";
import Modal from "../../components/modal/modal";
import { CardListProps, CharacterProps } from "../../types";
import { useGetCharacterByIdQuery } from "../../api/api";
import "./cardList.scss";

const CardList = (props: CardListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<CharacterProps | null | undefined>(
    null
  );
  const [id, setId] = useState<number | undefined>(undefined);

  const { data } = useGetCharacterByIdQuery(id);

  const openModal = (id: number | undefined) => {
    setId(id);
    setModalData(data);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData(null);
    setId(undefined);
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
