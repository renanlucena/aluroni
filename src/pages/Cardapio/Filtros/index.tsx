import React from 'react'
import filtros from './filtros.json';
import styles from "./Filtros.module.scss";
export default function Filtros() {

  interface IOpcao {
    id: number,
    label: string
  }

  function selecionarFiltro(opcao: IOpcao) {

  }
  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button className={styles.filtros__filtro} key={opcao.id} onClick={() => selecionarFiltro(opcao)}>
          {opcao.label}
        </button>
      ))}
    </div>
  )
}
