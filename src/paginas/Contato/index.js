import React from 'react'
import EstruturaPagina from '../../componentes/EstruturaPagina/'
import Mapa from '../../componentes/mapa/'
import './style.css';




const Contato = () => {

    return (
        <EstruturaPagina>
            <div className="horario">
                <p className="dest">HORÁRIOS DE <strong>ATENDIMENTO</strong></p>
                <p className="sub">Agende uma consulta pelo telefone (21) 3699 - 9999</p>
            </div>
            <ul type="none" className="lista-medicos">
                <li>
                    <img className="img-med" src="assets/medico01.png" alt="medico1" />
                    <p >Dr.Hélio</p>
                    <p >Segundas, quartas e sextas das 09:00 ás 16:00</p>
                </li>
                <li>
                    <img className="img-med" src="assets/medico02.png" alt="medico2" />
                    <p className="descript-med">Dr.Carlos</p>
                    <p>Terças e quintas das 13:00 ás 18:00</p>
                </li>
                <li><img className="img-suz" src="assets/medico03.png" alt ="medico3" />
                    <p>Dra.Suzana</p>
                    <p>Terças, quintas e sábados das 08:00 ás 12:00</p>
                </li>



            </ul>
            <div className="org-loc">
            <p className="local">ONDE ESTAMOS <strong>LOCALIZADOS</strong>?</p>
            <p className="local-sub">Av.Ayrton Senna, 3000 - Bairro Santa marta - Salto-SP</p> 
            </div>
            <Mapa />
             



        </EstruturaPagina>
    )
}








export default Contato;