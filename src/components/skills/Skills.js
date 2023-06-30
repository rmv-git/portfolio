import React from "react";
import style from './Skills.module.css';
import {Header} from "../../common/header/Header";

export const Skills = () => {
    return (
        <div className={style.content}>
            <Header description={"Check out my skills"}
                    title={"Skills"}
            />
            <div className={style.skillSection}>
                <div className={style.skillWrapper}>
                    <div className={style.contentSkill}>

                        <img className={style.imageIcon} alt={'html_icon'}/>
                    </div>
                    <div className={style.contentDescription}>
                        <h3 className={style.descriptionTitle}>HTML/CSS</h3>
                        <span className={style.description}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit Dolore, porro rem quod illo quam,
                            eum alias id, repellendus magni, quas.
            </span>
                    </div>
                </div>
                <div className={style.skillWrapper}>
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
                </div>
                <div className={style.skillWrapper}>
                    <div className={style.contentSkill}>
                        <img className={style.imageIcon} alt={'js_icon'}/>
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
                        <img className={style.imageIcon} alt={'react_icon'}/>
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
                        <img className={style.imageIcon} alt={'ts_icon'}/>
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
                        <img className={style.imageIcon} alt={'express_js'}/>
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
