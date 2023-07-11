import React, { useState } from 'react'
import styles from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";
import classNames from "classnames";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";

interface OrdenadorProps{
    ordenador: string,
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({ordenador, setOrdenador} :OrdenadorProps) {
    const [aberto, setAberto] = useState(false);
    return (
        <button 
            className={styles.ordenador} 
            onClick={() => setAberto(!aberto)}
            onBlur={() => setAberto(false)}
            >
            <span >Ordenar Por</span>
            {aberto ? < MdKeyboardArrowUp size={20}/> : < MdKeyboardArrowDown size={20}/>}
            <div className={classNames({
                [styles.ordenador__options]: true,
                [styles["ordenador__options--ativo"]]: aberto,
            }) }>
                {opcoes.map(opcao => (
                    <div className={styles.ordenador__option} key={opcao.value} onClick={() => setOrdenador(opcao.value)}>
                        {opcao.nome}
                    </div>

                ))}
            </div>
        </button>
    )
}
