import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {About} from "./components/about/About";
import {Projects} from "./components/projects/Projects";
import {Skills} from "./components/skills/Skills";

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <About/>
            <Projects/>
            <Skills/>
            <Footer/>
        </div>
    );
}
