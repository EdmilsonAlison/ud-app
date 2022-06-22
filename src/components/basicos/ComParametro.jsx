import React from "react";

export default function ComParametro(props) {

    const notaInt = Math.ceil(props.nota)
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.aluno}</h3>
            <p> {notaInt} </p>
        </div>
    )
}