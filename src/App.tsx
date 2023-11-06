import './App.css'

import Header from "./layout/header/Header";
import Main from "./layout/section/Main";
import AboutMe from "./layout/section/AboutMe";
import Projects from "./layout/section/Projects";
import Skills from "./layout/section/Skills";
import Footer from "./layout/footer/Footer";


function App() {


    return (
        <div>
            <Header/>
            <Main/>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <Footer/>

        </div>
    )
}

export default App
