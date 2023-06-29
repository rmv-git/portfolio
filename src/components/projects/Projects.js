import React from "react";
import style from './Projects.module.css'
import {Header} from "../../common/header/Header";
import todolist from './../../assets/images/projects_images/todolist.png';
import social_network from './../../assets/images/projects_images/social-network.png';
import counter_app from './../../assets/images/projects_images/counter_app.png';


export const Projects = () => {
    return (
        <div className={style.container}>
            <Header description={"Showcasing some of my best work"}
                    title={"Projects"}
            />
            <div className={style.containerProjects}>
                <div className={style.containerProject}>
                    <div className={style.containerImage}>
                        <div className={style.imageWrapper}>
                            <div className={style.imageWrapper2}>
                                <div className={style.contentDescription}>
                                    <p className={style.description}>Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit Dolore, porro rem quod illo quam,
                                        eum alias id, repellendus magni, quas.</p>
                                    <a className={style.link}
                                       title={"https://github.com/hrsk"}
                                       href={"https://github.com/hrsk"}
                                    >
                                        <span className={style.buttonLink}>More Info</span>
                                    </a>
                                </div>
                            </div>
                            <img className={style.img} src={social_network} alt={'socialnetwork'}/>
                        </div>
                        <div className={style.contentProjectInfo}>
                            <h5 className={style.contentTitle}>Social Network</h5>
                        </div>
                    </div>
                </div>
                <div className={style.containerProject}>
                    <div className={style.containerImage}>
                        <div className={style.imageWrapper}>
                            <div className={style.imageWrapper2}>
                                <div className={style.contentDescription}>
                                    <p className={style.description}>Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit Dolore, porro rem quod illo quam,
                                        eum alias id, repellendus magni, quas.</p>
                                    <a className={style.link}
                                       title={"https://github.com/gurskygursky"}
                                       href={"https://github.com/gurskygursky"}
                                    >
                                        <span className={style.buttonLink}>More Info</span>
                                    </a>
                                </div>
                            </div>
                            <img className={style.img} src={todolist} alt={'todolist'}/>
                        </div>
                        <div className={style.contentProjectInfo}>
                            <h5 className={style.contentTitle}>Todolist</h5>

                        </div>
                    </div>
                </div>
                <div className={style.containerProject}>
                    <div className={style.containerImage}>
                        <div className={style.imageWrapper}>
                            <div className={style.imageWrapper2}>
                                <div className={style.contentDescription}>
                                    <p className={style.description}>Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit Dolore, porro rem quod illo quam,
                                        eum alias id, repellendus magni, quas.</p>
                                    <a className={style.link}
                                       title={"https://github.com/gurskygursky"}
                                       href={"https://github.com/gurskygursky"}>
                                        <span className={style.buttonLink}>More Info</span>
                                    </a>
                                </div>
                            </div>
                            <img className={style.img} src={counter_app} alt={'counter'}/>
                        </div>
                    </div>
                    <div className={style.contentProjectInfo}>
                        <h5 className={style.contentTitle}>Counter</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
