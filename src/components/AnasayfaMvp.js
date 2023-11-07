import React from "react";
import "./AnasayfaMvp.css";
import resim1 from "./banner.png"

function AnasayfaMvp() {
    return (

        <div className="Anasayfabody">
            <div className="header">
                <div className="anasayfaüst">
                    <h1 className="Baslik">Teknolojik Yemekler</h1>
                    <p className="BaslikAlti">KOD ACIKTIRIR<br />PIZZA, DOYURUR</p>
                    <button className="btn1">ACIKTIM</button>
                </div>
            </div>
            <div className="pizzafoto">
                <img src={resim1} alt="resim1" className="resim1"></img>
            </div>
        </div>
    )
}
export default AnasayfaMvp;



