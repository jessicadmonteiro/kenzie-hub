import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ContextTech } from "../../../contexts/ContextTech/ContextTech";
import { ButtonPink, ButtonXModal } from "../../Button/styles";
import Input from "../../Input";
import { BackgroundModal, ContainerModal } from "../styles";

function Modal({ modalOpen, setModalOpen }) {
  const { AddTech } = useContext(ContextTech);
  const { register, handleSubmit, reset } = useForm();

  async function submit(data) {
    await AddTech(data);
    await setModalOpen(false);
    reset();
  }

  if (!modalOpen) return null;

  return (
    <BackgroundModal>
      <ContainerModal>
        <span>
          <h2>Cadastrar Tecnologia</h2>
          <ButtonXModal
            taype="button"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            X
          </ButtonXModal>
        </span>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            label="Nome"
            type="text"
            id="title"
            register={register("title")}
            placeholder="Digite a tecnologia"
          />
          <div>
            <label>Selecionar status</label>
            <select {...register("status")}>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
          </div>
          <ButtonPink type="submit">Cadastrar Tecnologia</ButtonPink>
        </form>
      </ContainerModal>
    </BackgroundModal>
  );
}

export default Modal;
