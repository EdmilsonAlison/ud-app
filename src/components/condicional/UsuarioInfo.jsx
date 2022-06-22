import React from "react";
import Ifs, { Else } from "./If";

export default function UsuarioInfo(props) {

    const usuario = props.usuario || {}
    return (
        <div>
            <Ifs test={usuario && usuario.nome}>

                Seja Bem-Vindo <strong> {usuario.nome} </strong>

                <Else>
                    Seja Bem-Vindo <strong>Amigão</strong>
                </Else>
            </Ifs>
        </div>
    )
}