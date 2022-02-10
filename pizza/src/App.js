import './App.css';
import Header from "./component/Header";
import Company from "./component/Header";
import Meals from "./component/Header";
import {Routes, Route} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contacts from "./component/Contacts";
import Team from "./component/Team";
import Countries from "./component/CountryInfo/Countries";
import CountryInfo from "./component/CountryInfo/CountryInfo";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route element={<Home/>} path={"/"}/>
                <Route element={<About/>} path={"/about"}/>
                <Route element={<Contacts/>} path={"/contacts"}/>
                <Route element={<Company/>} path={"/company"}/>
                <Route element={<Meals/>} path={"/meals"}/>
                <Route element={<Team/>} path={"/team"}/>
                <Route element={<Countries/>} path={"/countries"}/>
                <Route element={<CountryInfo/>} path={"/countries/:name"}/>

            </Routes>

        </div>
    );
}

export default App;
