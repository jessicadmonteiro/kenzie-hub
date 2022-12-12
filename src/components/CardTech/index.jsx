import Trash from "../../assets/Vector (4).png";
import Pencil from "../../assets/Vector.png";
import ButtonPlus from "../../assets/Button Plus.svg";
import { Container, ContainertLevelTrash, H3Text, Li, Ul } from "./styles";
import { useState } from "react";
import Modal from "../Modal/ModalAddTech";
import { useContext } from "react";
import { ContextAPI } from "../../contexts/ContextAPI/ContextAPI";
import { ContextTech } from "../../contexts/ContextTech/ContextTech";
import ModalEdit from "../Modal/ModalEditTech";

function CardTech() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const { arrayTech } = useContext(ContextAPI);
  const { DeleteTech, setIdTech } = useContext(ContextTech);

  function Edit(id) {
    setIdTech(id);
    setModalEditOpen(true);
  }

  return (
    <>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <ModalEdit
        modalEditOpen={modalEditOpen}
        setModalEditOpen={setModalEditOpen}
      />
      <Container>
        <h2>Tecnologias</h2>
        <img
          onClick={() => {
            setModalOpen(true);
          }}
          src={ButtonPlus}
          alt="Button"
        />
      </Container>
      <Ul>
        {arrayTech.length <= 0 && (
          <div>
            <H3Text>Adicione suas Tecnologias.</H3Text>
          </div>
        )}
        {arrayTech.map((tech) => (
          <Li key={tech.id} id={tech.id}>
            <h3>{tech.title}</h3>
            <ContainertLevelTrash>
              <p>{tech.status}</p>
              <div>
              <img
                id={tech.id}
                src={Pencil}
                alt="Pencil"
                onClick={() => {
                  Edit(tech.id);
                }}
              />
              <img
                id={tech.id}
                src={Trash}
                alt="Trash"
                onClick={() => {
                  DeleteTech(tech.id);
                }}
              />
              </div>
            </ContainertLevelTrash>
          </Li>
        ))}
      </Ul>
    </>
  );
}

export default CardTech;
