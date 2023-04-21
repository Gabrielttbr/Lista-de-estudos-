import Button from "../Button";
import style from "./Cronometro.module.scss";
import Clock from "./Clock";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { Tarefa } from "../../types/Tarefa";

interface props {
  selecionada?: Tarefa| undefined;
  finalizarTarefa: () => void;
}

const StopWatch = ({ selecionada, finalizarTarefa }: props) => {
  const [tempo, setTempo] = useState<number>();
  useEffect(() => {
    if (selecionada?.tempo) {
      setTempo(tempoParaSegundos(selecionada?.tempo || "00:00:00"));
    }
  }, [selecionada]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if(contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro </p>
      <div className={style.relogioWrapper}>
        <Clock tempo={tempo} />
      </div>
      <Button onClick={() => regressiva(tempo)}>Iniciar</Button>
    </div>
  );
};
export default StopWatch;
