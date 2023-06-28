import React from "react";
import style from './Nav.module.css';

export const Nav = () => {
    return (
        <div className={style.container}>
            <ul className={style.linkContainer}>
                <li className={style.link}><a href='/#homepage'>Homepage</a></li>
                <li className={style.link}><a href='/#about'>About</a></li>
                <li className={style.link}><a href='/#skills'>Skills</a></li>
                <li className={style.link}><a href='/#projects'>Projects</a></li>
                <li className={style.link}><a href='/#contacts'>Contacts</a></li>
            </ul>
        </div>
    );
}
