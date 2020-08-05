import React from 'react'
import { Link } from 'react-router-dom'

import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'

import './styles.css'

interface PageHeaderProps {//maneira de representar a(s) tipagem(ns) da propriedade
    title: string;
    description?: string;//propriedade opcional = '?'
}

//tenho um componente chamado PageHeader, ele é um FC (function component) e possui as propriedades dentro de PageHeaderProps
const PageHeader:React.FC<PageHeaderProps> = (props) => { //pro componente receber uma propriedade, faço a function como arrow function e trato ela como constante
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt='Voltar'></img>
                </Link>
                <img src={logoImg} alt='Proffy' className='imgProffy'></img>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p>}

                {props.children}
            </div>            
        </header>
    )
}

export default PageHeader