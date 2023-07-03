import Buscador from "./Buscador";
import styles from "./Cardapio.module.scss";
import {ReactComponent as Logo} from "assets/logo.svg";
import { useState } from "react";
import Filtros from "./Filtros";

export default function Cardapio(){
    const [busca, setBusca] = useState("");
    return(
        <main className={styles.main}>
            <nav className={styles.menu}>
                <Logo />
            </nav>

                <header className={styles.header}>
                    <div className={styles.header__text}>
                    A casa do código e da massa
                    </div>
                </header>
                <section className={styles.cardapio}>
                    <h3 className={styles.cardapio__titulo}>Cardapio</h3>
                    <Buscador busca ={busca} setBusca={setBusca}/>
                    <div className={styles.cardapio__filtros}>
                        <Filtros />
                    </div>
                </section>
               
            
        </main>
    )
}