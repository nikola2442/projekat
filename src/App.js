import React from "react";
import { Header } from "./Komponente/Header";
import { Balans } from "./Komponente/Balans";
import { Prihodi } from "./Komponente/Prihodi";
import { Transakcija } from "./Komponente/Transakcija";
import { Buttons } from "./Komponente/Buttons";
import  './App.css'

function App()
{
    return(
    <div>
        <Header/>
        <div className="container">
            <Balans/>
            <Prihodi/>
            <Transakcija/>
            <Buttons/>
        </div>
    </div>


    );

}
export default App;