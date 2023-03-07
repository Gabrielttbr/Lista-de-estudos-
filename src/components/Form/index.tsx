import React, { Component, ReactNode } from "react";
import Button from "../Button";
import Style from "./Form.module.scss";

const Form = () => {
  return (
    <form className={Style.novaTarefa}>
      <div className={Style.inputContainer}>
        <label htmlFor="tarefa">Título da tarefa</label>
        <input
          type="text"
          name="tarefa"
          placeholder="O que você quer estudar"
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
          max="01:30:00"
          required
        />
      </div>
      <Button />
    </form>
  );
};

export default Form;
