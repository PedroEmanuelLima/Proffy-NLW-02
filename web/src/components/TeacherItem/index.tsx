import React from 'react'; 

import api from '../../services/api';

import iconWhatsapp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface Teacher {
    name: string;
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    subject: string;
    wahtsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    function createNewConection() {
        api.post('connections', {
            user_id: teacher.id,
        })
    }

    return(
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt="Pedro Emanuel"/>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
                {teacher.bio}
            </p>
            <footer>
                <p>
                    Preço/hora:
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a
                    target="blank"
                    onClick={createNewConection}
                    href={` https://wa.me/${teacher.wahtsapp}`}
                >
                    <img src={iconWhatsapp} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;