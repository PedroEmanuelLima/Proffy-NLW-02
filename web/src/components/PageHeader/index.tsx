import React from 'react';

import { Link } from 'react-router-dom';

import iconBack from '../../assets/images/icons/back.svg';
import iconLogo from '../../assets/images/logo.svg';

import './styles.css';

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={iconBack} alt="Voltar" />
                </Link>
                <img src={iconLogo} alt="Proffy"/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p> }

                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;