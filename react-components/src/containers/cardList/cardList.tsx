import { useState } from "react";
import Card from "../../components/card/card";
import Modal from "../../components/modal/modal";
import { CardListProps } from "../../types";
import { useGetCharacterByIdQuery } from "../../api/api";
import "./cardList.scss";

const CardList = (props: CardListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [id, setId] = useState<number | undefined>();

  const { data } = useGetCharacterByIdQuery(id);

  const openModal = (id: number | undefined) => {
    setId(id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
      {data && <Modal data={data} isOpen={isOpen} handleClick={closeModal} />}
    </div>
  );
};

export default CardList;
