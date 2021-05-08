import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


import EstruturaPagina from '../../componentes/EstruturaPagina';



const Home = () => {
    return (
        <EstruturaPagina>
            <main>
            <div className="background">
                
                <div className="container-titulo">
                    <h1 className="titulo-h">OS MELHORES  <span>APARELHOS DENTÁRIOS!</span>  </h1>
                    <p className="sub">Confira abaixo todas as especialidades odontológicas que temos á sua disposição!</p>
                </div>
                
                <ul type="none" className="lista">
                    <li>
                        <img src="assets/dente.png" alt="dente" />
                        <p>Pré-avaliação</p>
                    </li>
                    <li>
                        <img src="assets/dente.png" alt="dente" />
                        <p>Raio-X digital</p>
                    </li>
                    <li>
                        <img src="assets/dente.png" alt="dente" />
                        <p>Aparelhos Dentários</p>
                    </li>
                    <li>
                        <img src="assets/dente.png" alt="dente" />
                        <p>Clareamento Dental</p>
                    </li>
                </ul>
                        

            </div>
            <div className="aparelho">
                <p>POR QUE USAR <strong>APARELHO?</strong></p>
                <img src="assets/aparelho.png"  alt="aparelho"/>

            </div>
            <ul type="none" className="pro-ap">
                <li>
                    <h3>Alinhar os dentes</h3>
                    <p>Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração.</p>
                </li>
                <li>
                    <h3>Corrigir espaço entre os dentes</h3>
                    <p>Muitas pessoas não conseguem nem usar fio dental devido á posição da sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma bem mais ampla.</p>
                </li>
                <li>
                    <h3>Corrigir espaço entre os dentes</h3>
                    <p>Uma dentiçao desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos.</p>
                </li>


            </ul>
            <div className="titulo-op">
                <p>OPINIÃO DOS <strong>CLIENTES</strong></p>
            </div>
            <ul type="none" className="opiniao">
                <li>
                    <img src="assets/cliente01.png" alt="cliente1" />
                    <p>Alberto</p>
                    <p>Usei aparelho por 2 anos e agora posso sorrir novamente.</p>
                </li>
                <li>
                    <img src="assets/cliente02.png" alt="cliente2" />
                    <p>Eliana</p>
                    <p>Meus dentes eram espaçados e depois de 1 ano estão no lugar certo.</p>
                </li>
                <li>
                    <img src="assets/cliente03.png" alt="cliente3" />
                    <p>Carla</p>
                    <p>Começei a usar ano passado e já estou notando a diferença.</p>

                </li>



            </ul>


            <div className="div-btn">
                <div>
                <Link to="/contato" className="b-contato">Entre em contato conosco</Link>
            </div>
            </div>

</main>



        </EstruturaPagina >
    )
}



export default Home;















