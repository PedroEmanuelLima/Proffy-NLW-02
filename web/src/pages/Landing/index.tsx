import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import urlLogo from '../../assets/images/logo.svg'
import urlLanding from '../../assets/images/landing.svg'
import iconStudy from '../../assets/images/icons/study.svg'
import iconGiveClasses from '../../assets/images/icons/give-classes.svg'
import iconPurpleHeart from '../../assets/images/icons/purple-heart.svg'

import api from '../../services/api';

import './styles.css';

function Landing() {

    const [totalConetions, setTotalConections] = useState(0);

    useEffect(() => {
        api.get('connections').then(res => {
            const { total } = res.data;

            setTotalConections(total);
        })
    }, [])

    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={urlLogo} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img
                    src={urlLanding}
                    alt="Pataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={iconStudy} alt="Estudar"/>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={iconGiveClasses} alt="Estudar"/>
                        Dar Aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConetions} conexões já realizadas <img src={iconPurpleHeart} alt="Coração Roxo" />
                </span>
            </div>
        </div>
    )
}

export default Landing;