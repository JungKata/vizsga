import { Component } from "react";



export default class QuizMaker extends Component{
    render(){
        return <div className="tab-content">
            <div className="quizracer">
                <h2>QuizRacer</h2><br />
                
                <p>Üdvözöllek a QuizRacer nevű weboldalon! 
                Ez a platform arra lett tervezve, hogy segítsen szórakoztató és interaktív módon tesztelni a tudásodat különböző témákban. Olvass tovább, és ismerd meg a weboldal nyújtotta lehetőségeket!
                </p>

                <h2>Játékszabály:</h2>

                <p>Az alkalmazás, véletlenszerűen kiválaszt kérdéseket és várja a felhasználó válaszait.
                Minden kérdéshez több választási lehetőség tartozik. Válaszd ki a szerinted helyes választ, majd kattints a "Következő" gombra a következő kérdéshez.
                </p>

                <h2>Elérhetőségek:</h2>

                <p>Készítette: Jung Katalin <br />
                Ha bármilyen hiba merül fel a játék során, kérem konzultáljanak velem e-mailben. </p>
                
                <p>Email: jung.katalin@petrik.hu <br />
                    Telefonszám: 06301745559
                </p>
            </div>
            
        
    </div>
    
       
    }
}