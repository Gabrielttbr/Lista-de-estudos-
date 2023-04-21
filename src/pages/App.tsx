import { useState } from "react";
import Form from "../Components/Form";
import List from "../Components/List";
import StopWatch from "../Components/Stopwatch";
import Style from "./App.module.scss";
import { Tarefa } from "../types/Tarefa";

const App = () => {
  const [tarefas, setTarefas] = useState<Array<Tarefa>>([]);
  const [selecionado, setSelecionado] = useState<Tarefa>();

  const selecionaTarefa = (tarefaSelecionada: Tarefa) => {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionada: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  };

  function finalizarTarefa() {
    if (selecionado) {
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
    }
  }
  return (
    <div className={Style.AppStyle}>
      <List tarefas={tarefas} selecionaTarefa={selecionaTarefa}></List>
      <StopWatch
        selecionada={selecionado}
        finalizarTarefa={finalizarTarefa}
      ></StopWatch>
      <Form setTarefas={setTarefas} tarefas={tarefas}></Form>
    </div>
  );
};

export default App;
