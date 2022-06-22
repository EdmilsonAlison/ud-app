import React from "react";
import produtos from "../../data/produtos"
import './TabelaProdutos.css'

export default function TabelaProduto(props) {

    const prod = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par':'Impar'}>
                <td> {produto.id} </td>
                <td> {produto.nome} </td>
                <td> R${produto.preco.toFixed(2).replace('.',',')} </td>
            </tr>
        )
    })
    return (
        <div className="TabelaProdutos">
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preco</th>
                    </tr>
                </thead>
                <tbody>
                    {prod}
                </tbody>
            </table>
        </div>
    )
}