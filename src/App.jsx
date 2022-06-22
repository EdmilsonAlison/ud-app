import React from "react";
import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProduto from "./components/repeticao/TabelaProduto";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";



export default function App(props) {
    return (
        <div className='App'>
            <h1> Fundamentos React </h1>

            <div className="Cards">
                <Card titulo='#10- Comunicação Indireta' color ='#3236ad'>
                   <IndiretaPai/>
                </Card>

                <Card titulo='#9- Comunicação Direta' color ='#037360'>
                    <DiretaPai/>
                </Card>

                <Card titulo='#08- Renderização Condicional' color='#9c0613'>
                    <ParOuImpar numero={20}>

                    </ParOuImpar>

                    <UsuarioInfo usuario={{ nome: 'Eddie' }}>

                    </UsuarioInfo>
                </Card>

                <Card titulo='#07- Repeticao Produto' color='#3f014a'>
                    <TabelaProduto>

                    </TabelaProduto>
                </Card>

                <Card titulo='#06- Repeticao' color='#11d448'>
                    <ListaAlunos>

                    </ListaAlunos>
                </Card>

                <Card titulo='#05- Componentes com Filhos' color='#42f5b0'>
                    <Familia sobreNome='Dias'>
                        <FamiliaMembro nome='Eddie' />
                        <FamiliaMembro nome='Millena' />
                        <FamiliaMembro nome='Sophia' />
                    </Familia>
                </Card>

                <Card titulo='#04- Desafio Aleatório' color='#7c4ef2'>
                    <Aleatorio max={10} min={1} />
                </Card>

                <Card titulo='#03- Fragmento' color='#ce4ef2'>
                    <Fragmento />
                </Card>

                <Card titulo='#02- Com Parametro' color='#f24ece'>
                    <ComParametro titulo='Situação Aluno' aluno='Eddie Dias' nota={9.3} />
                </Card>

                <Card titulo='#01- Primeiro Componente' color='#f24e90'>
                    <Primeiro />
                </Card>



            </div>

        </div>
    )
}