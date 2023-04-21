import Button from "../Button";
import Style from "./Form.module.scss";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ setTarefas, tarefas }: any) => {
  const [tarefa, setTarefa] = useState<string>("");
  const [tempo, setTempo] = useState<string>("00:00:00");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setTarefas([
      ...tarefas,
      {
        titulo: tarefa,
        tempo: tempo,
        selecionado: false,
        completado: false,
        id: uuidv4(),
      },
    ]);
    setTarefa("");
  };
  return (
    <form className={Style.novaTarefa} onSubmit={handleSubmit}>
      <div className={Style.inputContainer}>
        <label htmlFor="tarefa">Título da tarefa</label>
        <input
          type="text"
          name="tarefa"
          placeholder="O que você quer estudar"
          onChange={(e) => {
            setTarefa(e.target.value);
          }}
          value={tarefa}
          id="tarefa"
          required
        />
      </div>
      <div className={Style.inputContainer}>
        <label>Tempo</label>
        <input
          type="TIME"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:00:00"
          onChange={(e) => {
            setTempo(e.target.value);
          }}
          value={tempo}
          required
        />
      </div>
      <Button>Adicionar</Button>
    </form>
  );
};

export default Form;
