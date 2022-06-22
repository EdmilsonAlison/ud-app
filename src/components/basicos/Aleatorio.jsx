import React from "react";

export default function Aleatorio(props) {
    const {min, max} = props
    const aleatorio = Math.round(Math.random() * (max - min) + min);
    return (
        <div>
            <h1>Valor aleatório gerado: </h1>
            <p>Valor mínimo: {min}</p>
            <p>Valor Máximo: {max}</p>
            <p> <strong> {aleatorio} </strong> </p>
        </div>
    )
}