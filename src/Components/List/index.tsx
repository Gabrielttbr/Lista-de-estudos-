import { Tarefa } from "../../types/Tarefa";
import Style from "./List.module.scss";
import Item from "./item";

interface listProps {
  tarefas: Array<Tarefa>;
  selecionaTarefa: (TarefaSelecionada: Tarefa) => void;
}

const List = ({ tarefas, selecionaTarefa }: listProps) => {
  return (
    <aside className={Style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => {
          return <Item  
          selecionaTarefa={selecionaTarefa}
          key={item.id} 
          {...item} />;
        })}
      </ul>
    </aside>
  );
};

export default List;
