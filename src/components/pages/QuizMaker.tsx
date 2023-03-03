import { Component } from "react";


export default class QuizMaker extends Component{
    render(){
        return <div id="kviz">

                <div id="kviz-kinezet">
             <h1 id="lehetoseg">What Type Of Thing Are You?</h1>
             
             <div className="kerdes_Egy">
             <      h2 id="fokerdes">
                            Első Kérdés?
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