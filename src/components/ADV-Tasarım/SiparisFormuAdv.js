import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./SiparisFormuAdv.css";
import foto1 from "./adv-form-banner.png";
import Pizzasecim from "./Pizzasecim";
import Dropdown from "./Dropdown";
import Checkbox from "../Checkbox";
import iletisim1 from "./icons/icon-1.png";
import iletisim2 from "./icons/icon-2.png";
import iletisim3 from "./icons/icon-3.png";
import insta1 from "./insta/li-0.png";
import insta2 from "./insta/li-1.png";
import insta3 from "./insta/li-2.png";
import insta4 from "./insta/li-3.png";
import insta5 from "./insta/li-4.png";
import insta6 from "./insta/li-5.png";


function SiparisFormuAdv({ }) {
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
        <div className="sayfa">
            <div className="SiparisHeaderAdv">
                <h1 className="BaslikSiparisAdv">Teknolojik Yemekler</h1>
            </div>
            <div className="bannerfoto">
                <img src={foto1} alt="foto1" />
            </div>
            <div className="HeaderSiparisAdv">
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container fluid>

                        <Nav className="me-auto">


                            <NavLink className="nav-link link1" to="/" exact>
                                Ana Sayfa
                            </NavLink>
                            <NavLink className="nav-link link2" to="/pizza">
                                Sipariş Oluştur
                            </NavLink>
                        </Nav>
                    </Container>
                </Navbar>

            </div>
            <div className="SiparisContentadv">
                <div className="pizzaismiadv">
                    <h2>Position Absolute Acı Pizza</h2>
                </div>

                <div className="sayfaüstfiyatadv">
                    <p><strong>85.50 TL</strong></p>
                    <div className="puanlamaadv">
                        <div>
                            <p>4.9</p>
                        </div>
                        <div>
                            <p>(200)</p>
                        </div>
                    </div>
                </div>
                <div className="aciklamaadv">
                    <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.</p>
                </div>


                <div className="seçimadv">
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




                <div className="malzemeEkleadv">
                    <div>
                        <p><strong>Ek Malzemeler</strong></p>
                    </div>
                    <div>
                        <p>En fazla 10 malzeme seçebilirsiniz. 5TL</p>
                    </div>
                    <div className="ekmalzemeleradv">
                        <Pizzasecim />
                    </div>
                </div>




            </div>

            <footer className="footersiparis">
                <div className="footersiparissira1">
                    <div class="rowadv">
                        <div className="footersiparisbaslik"><p className="footersiparisyazi">TEKNOLOJİK<br /> YEMEKLER</p></div>
                        <div className="iletisimadv">
                            <img src={iletisim1}></img>
                            <p>341 Londonderry Road,
                                Istanbul Türkiye</p>
                        </div>


                        <div className="iletisimadv">
                            <img src={iletisim2}></img>
                            <p>aciktim@teknolojikyemekler.com</p>
                        </div>
                        <div className="iletisimadv">
                            <img src={iletisim3}></img>
                            <p>+90 216 123 45 67</p>
                        </div>


                    </div>
                </div>
                <div className="footersiparissira2">
                    <p className="Sicakadv"><strong >Sıccacık Menüler</strong></p>
                    <p>Terminal Pizza</p>
                    <p>5 Kişilik Hackathlon Pizza </p>
                    <p>useEffect Tavuklu Pizza</p>
                    <p>Beyaz Console Frosty</p>
                    <p>Testler Geçti Mutlu Burger</p>
                    <p>Position Absolute Acı Burger</p>
                </div>

                <div className="footersiparissira3">
                    <p>Instagram</p>
                    <img src={insta1} alt="insta1" />
                    <img src={insta2} alt="insta2" />
                    <img src={insta3} alt="insta3" />
                    <img src={insta4} alt="insta4" />
                    <img src={insta5} alt="insta5" />
                    <img src={insta6} alt="insta6" />
                </div>





            </footer >


        </div>
    )
}

export default SiparisFormuAdv;