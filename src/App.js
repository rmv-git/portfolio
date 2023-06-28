import './App.css';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {About} from "./components/about/About";

export const App = () => {
    return (
        <div className="App">
            <Header/>
            <About/>
            <Footer/>
        </div>
    );
}
