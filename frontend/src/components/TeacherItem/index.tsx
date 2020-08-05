import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/46060334?s=460&u=b3cf11328c15864aba9014db1d7526e3dae67ba9&v=4" alt="Lks"/>
                <div>
                    <strong>Lucas Lima</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p className='firstP'>
            Um cidadão fez voto de desapego e pobreza. 
            <br></br>
            Dispôs de todos os seus bens e propriedades, reservou para si apenas duas tangas, e saiu pelo mundo.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$90,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"></img>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem