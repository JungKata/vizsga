import { Component } from "react";


// interface QuizStatus{
//     tema: string;
//     kerdes: string;
//     valasz_1: string;
//     valasz_2: string;
//     valasz_3: string;
//     valasz_4: string;
//     helyes_valasz: string;
// }

export default class QuizMaker extends Component{

    render(){
        return <div id="kviz">

                <div id="kviz-kinezet">
             <h1 id="fokerdes">Melyik a kedvenc gyümölcsöd?</h1>
             
             <div className="kerdes_Egy">
             <      h2 id="tema">
                        teszt
                    </h2>
             </div>

            <div className="kep">
                
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                            <div className="valasz_resz">
                                <p id="valaszlehetoseg">Alma</p> 
                            </div><br />
                    </div>

                    <div className="col-md-6">
                            <div className="valasz_resz">
                                <p id="valaszlehetoseg">Körte</p> 
                            </div><br />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                            <div className="valasz_resz">
                                <p id="valaszlehetoseg">Banán</p> 
                            </div><br />
                    </div>

                    <div className="col-md-6">
                            <div className="valasz_resz">
                                <p id="valaszlehetoseg">Narancs</p> 
                            </div><br />
                    </div>
                </div>
            </div>

            <div className="tovabb_gomb">
                <button type="submit" className="button button-block" id="gomb_tovabb">Tovább</button>
            </div>
            </div>
             
        </div>
}
}