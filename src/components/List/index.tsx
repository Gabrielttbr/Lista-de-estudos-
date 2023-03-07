import React, { ReactElement } from "react";
import { JsxElement } from "typescript";
import Style from "./List.module.scss";

const List = () => {
  const tarefas = [
    {
      titulo: "React",
      tempo: "01:00:00",
    },
    {
      titulo: "Javascript",
      tempo: "03:00:00",
    },
  ];
  const RenderizaListaDeTarefas = tarefas.map((item, idx) => {
    return (
      <li className={Style.item} key={idx}>
        <h3>{item.titulo}</h3> <span>{item.tempo}</span>
      </li>
    );
  });

  return (
    <aside className={Style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>{RenderizaListaDeTarefas}</ul>
    </aside>
  );
};

export default List;
