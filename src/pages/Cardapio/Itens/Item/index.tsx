import React from 'react'
import logo from "assets/logo.svg";
import styles from "./Item.module.scss";

export default function Item() {
  return (
    <div className={styles.item}>
        <div className={styles.item__imagem}>
            <img src={logo} alt="imagem" />
        </div>

        <div className={styles.item__descricao}>
            <div className={styles.item__titulo}>
                <h2>ff</h2>
                <p>f</p>
            </div>
            <div className={styles.item__tags}>
                <div className={styles.item__tipo}>
                    Massa
                </div>
                <div className={styles.item__porcao}>
                    400g
                </div>
                <div className={styles.item__qtdpessoas}>
                    4
                </div>
                <div className={styles.item__valor}>
                    R$55
                </div>
            </div>
        </div>

    </div>
  )
}
