
import Style from "../List.module.scss";
import { Tarefa } from "../../../types/Tarefa";

interface ItemProps extends Tarefa {
  selecionaTarefa: (TarefaSelecionada: Tarefa) => void;
}


const Item = ({titulo, tempo, completado, id, selecionada, selecionaTarefa}: ItemProps) => {
  return (
    <li 
    className={`${Style.item} ${selecionada ? Style.itemSelecionado : ""} ${completado ? Style.itemCompletado : ''}`} 
    onClick={() => !completado && selecionaTarefa({
      titulo,
      tempo,
      completado,
      id,
      selecionada
    })}>
      <h3>{titulo}</h3> <span>{tempo}</span>
      {completado && <span className={Style.concluido} aria-label="tarefa completada"></span>}
    </li>
  );
};

export default Item;