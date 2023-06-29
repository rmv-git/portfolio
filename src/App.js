import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {About} from "./components/about/About";
import {Projects} from "./components/projects/Projects";

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <About/>
            <Projects/>
            <Footer/>
        </div>
    );
}
