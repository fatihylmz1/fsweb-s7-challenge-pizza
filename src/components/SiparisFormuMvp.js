import React, { useState } from "react";
import "./SiparisFormuMvp.css";
import { Link, Switch, Route } from "react-router-dom";
import AnasayfaMvp from "./AnasayfaMvp";
import HeaderSiparisMvp from "./HeaderSiparisMvp";
import Checkbox from "./CheckboxMvp";
import Dropdown from "./DropdownMvp";

import Pizzasecim from "./Pizzasecim";



function SiparisFormuMvp() {
    const [isCheckedSmall, setIsCheckedSmall] = useState(false);
    const [isCheckedMedium, setIsCheckedMedium] = useState(false);
    const [isCheckedLarge, setIsCheckedLarge] = useState(false);




    const handleSmallChange = () => {
        setIsCheckedSmall(!isCheckedSmall);
    };

    const handleMediumChange = () => {
        setIsCheckedMedium(!isCheckedMedium);
    };

    const handleLargeChange = () => {
        setIsCheckedLarge(!isCheckedLarge);
    };
    const handleDropdownChange = (selectedValue) => {

        console.log(`Seçilen değer: ${selectedValue}`);
    };

    return (

        <div className="SiparisFormuMvp">
            <div className="SiparisHeader">
                <h1 className="BaslikSiparis">Teknolojik Yemekler</h1>
                <div className="HeaderSiparisMvp">
                    <HeaderSiparisMvp />
                </div>
            </div>
            <div className="SiparisContent">
                <div className="pizzaismi">
                    <h2>Position Absolute Acı Pizza</h2>
                </div>

                <div className="sayfaüstfiyat">
                    <p><strong>85.50 TL</strong></p>
                    <div className="puanlama">
                        <div>
                            <p>4.9</p>
                        </div>
                        <div>
                            <p>(200)</p>
                        </div>
                    </div>
                </div>
                <div className="aciklama">
                    <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
                </div>


                <div className="seçim">
                    <div>
                        <div><p><strong>Boyut Seç</strong></p></div>
                        <Checkbox size="medium" label="Küçük" checked={isCheckedSmall} onChange={handleSmallChange} />
                        <Checkbox size="medium" label="Orta" checked={isCheckedMedium} onChange={handleMediumChange} />
                        <Checkbox size="medium" label="Büyük" checked={isCheckedLarge} onChange={handleLargeChange} />
                    </div>
                    <div>
                        <div><p><strong>Hamur Seç</strong></p></div>
                        <Dropdown onChange={handleDropdownChange} />
                    </div>
                </div>




                <div className="malzemeEkle">
                    <div>
                        <p><strong>Ek Malzemeler</strong></p>
                    </div>
                    <div>
                        <p>En fazla 10 malzeme seçebilirsiniz. 5TL</p>
                    </div>
                    <div className="ekmalzemeler">
                        <Pizzasecim />
                    </div>
                </div>




            </div>



        </div>
    )
}
export default SiparisFormuMvp;