import React from "react";

export default function FamiliaMembro(props) {
    return (
        <span>
            <strong> {props.nome} {props.sobreNome} </strong>
        </span>
    )
}