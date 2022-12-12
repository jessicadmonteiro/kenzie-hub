import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ContextTech } from "../../../contexts/ContextTech/ContextTech";
import { ButtonPink, ButtonXModal } from "../../Button/styles";
import { BackgroundModal, ContainerModal } from "../styles";

function ModalEdit({ modalEditOpen, setModalEditOpen }) {
  const { ToEdit } = useContext(ContextTech);
  const { register, handleSubmit } = useForm();

  async function submit(data) {
    await ToEdit(data);
    setModalEditOpen(false);
  }

  if (!modalEditOpen) return null;

  return (
    <BackgroundModal>
      <ContainerModal>
        <span>
          <h2>Editar Tecnologia</h2>
          <ButtonXModal
            taype="button"
            onClick={() => {
              setModalEditOpen(false);
            }}
          >
            X
          </ButtonXModal>
        </span>
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label>Selecionar status</label>
            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <ButtonPink type="submit">Salvar alterações</ButtonPink>
        </form>
      </ContainerModal>
    </BackgroundModal>
  );
}

export default ModalEdit;
