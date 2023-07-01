import React from "react";
import style from './Skills.module.css';
import {Header} from "../../common/header/Header";
import html_icon from './../../assets/images/programming_language_images/html5_icon.png';
import js_icon from './../../assets/images/programming_language_images/javascript_language_icon.png';
import react_icon from './../../assets/images/programming_language_images/react_react_native_icon.png';
import ts_icon from './../../assets/images/programming_language_images/typescript.png';
import express_js from './../../assets/images/programming_language_images/express_javascript.png';

export const Skills = () => {
    return (
        <div className={style.content}>
            <Header description={"Check out my skills"}
                    title={"Skills"}
            />
            <div className={style.skillSection}>
                <div className={style.skillWrapper}>
                    <div className={style.contentSkill}>

                        <img className={style.imageIcon} src={html_icon} alt={'html_icon'}/>
                    </div>
                    <div className={style.contentDescription}>
                        <h3 className={style.descriptionTitle}>HTML/CSS</h3>
                        <span className={style.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </div>
                </div>
                {/*<div className={style.skillWrapper}>
                    <div className={style.contentSkill}>
                        <img className={style.imageIcon} alt={'web_design'}/>
                    </div>
                    <div className={style.contentDescription}>
                        <h3 className={style.descriptionTitle}>Web Design</h3>
                        <span className={style.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </div>
                </div>*/}
                <div className={style.skillWrapper}>
                    <div className={style.contentSkill}>
                        <img className={style.imageIcon} src={js_icon} alt={'js_icon'}/>
                    </div>
                    <div className={style.contentDescription}>
                        <h3 className={style.descriptionTitle}>Javasript</h3>
                        <span className={style.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </div>
                </div>
                <div className={style.skillWrapper}>
                    <div className={style.contentSkill}>
                        <img className={style.imageIcon} src={react_icon} alt={'react_icon'}/>
                        <div className={style.contentDescription}>
                            <h3 className={style.descriptionTitle}>React JS</h3>
                            <span className={style.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                        </div>
                    </div>

                </div>
                <div className={style.skillWrapper}>
                    <div className={style.contentSkill}>
                        <img className={style.imageIcon} src={ts_icon} alt={'ts_icon'}/>
                    </div>
                    <div className={style.contentDescription}>
                        <h3 className={style.descriptionTitle}>TypeScript</h3>
                        <span className={style.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </div>
                </div>
                <div className={style.skillWrapper}>
                    <div className={style.contentSkill}>
                        <img className={style.imageIcon} src={express_js} alt={'express_js'}/>
                    </div>
                    <div className={style.contentDescription}>
                        <h3 className={style.descriptionTitle}>Express.js</h3>
                        <span className={style.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
