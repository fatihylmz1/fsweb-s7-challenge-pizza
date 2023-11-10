import React from "react";
import "./AnasayfaAdv.css";
import resim2 from "./mvp-banner.png"
import { Link } from "react-router-dom";
import ikon1 from "./1.svg";
import ikon2 from "./2.svg";
import ikon3 from "./3.svg";
import ikon4 from "./4.svg";
import ikon5 from "./5.svg";
import ikon6 from "./6.svg";
import kart1 from "./kart-1.png";
import food1 from "./food-1.png";
import food2 from "./food-2.png";
import food3 from "./food-3.png";
import iletisim1 from "./icons/icon-1.png";
import iletisim2 from "./icons/icon-2.png";
import iletisim3 from "./icons/icon-3.png";
import insta1 from "./insta/li-0.png";
import insta2 from "./insta/li-1.png";
import insta3 from "./insta/li-2.png";
import insta4 from "./insta/li-3.png";
import insta5 from "./insta/li-4.png";
import insta6 from "./insta/li-5.png";

function AnasayfaAdv() {
    return (

        <div className="Anasayfa">
            <div className="headerAdv">
                <div className="anasayfaüstAdv">
                    <h1 className="BaslikAdv">Teknolojik Yemekler</h1>
                    <p className="fırsatAdv">fırsatı kaçırma</p>
                    <p className="BaslikAltiAdv">KOD ACIKTIRIR<br />PIZZA, DOYURUR</p>
                    <Link to="./pizza">
                        <button className="btn1Adv">ACIKTIM</button>
                    </Link>
                </div>
            </div>

            <div className="ikon">
                <div><img src={ikon1} alt="ikon1" /></div>
                <div><p>YENİ! Kore</p></div>
                <div><img src={ikon2} alt="ikon2"></img></div>
                <div><p>Pizza</p></div>
                <div><img src={ikon3} alt="ikon3"></img></div>
                <div><p>Burger</p></div>
                <div><img src={ikon4} alt="ikon4"></img></div>
                <div><p>Kızartmalar</p></div>
                <div><img src={ikon5} alt="ikon5"></img></div>
                <div><p>Fast Food</p></div>
                <div><img src={ikon6} alt="ikon6"></img></div>
                <div><p>Gazlı İçecekler</p></div>
            </div>
            <div className="cards" >

                <div className="kart1">
                    <div className="kartbilgi">
                        <div className="lezzet"><p className="özellezzet">Özel<br />Lezzetus</p></div>
                        <div><p className="position">Position:Absolute Acı Burger</p></div>
                        <Link to="./pizza">
                            <button className="btn2Adv">Sipariş Ver</button>
                        </Link>
                    </div>
                </div>
                <div className="kart2-3">


                    <div className="kart2">
                        <div className="karbilgi2">
                            <div><p className="hackathlon">Hackathlon<br />Burger Menu</p></div>
                            <Link to="./pizza">
                                <button className="btn2Adv">Sipariş Ver</button>
                            </Link>
                        </div>
                    </div>
                    <div className="kart3">
                        <div className="kartbilgi3">
                            <div className="npm"><p>Çoooook hızlı<br />npm gibi kurye</p></div>
                            <Link to="./pizza">
                                <button className="btn2Adv">Sipariş Ver</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="seçenekler">
                <div className="ençok"><p className="ençokyazi">en çok paketlenen menüler</p></div>
                <div className="acıktıran"><p className="acıktıranyazi"><strong>ACIKTIRAN KODLARA DOYURAN LEZZETLER</strong></p></div>
                <div className="ikon">
                    <div className="iconcontainer"><img src={ikon1} alt="ikon1" />
                        <div><p>Ramen</p></div></div>

                    <div className="iconcontainer"><img src={ikon2} alt="ikon2"></img>
                        <div><p>Pizza</p></div></div>

                    <div className="iconcontainer"><img src={ikon3} alt="ikon3"></img>
                        <div><p>Burger</p></div></div>


                    <div className="iconcontainer"><img src={ikon4} alt="ikon4"></img>
                        <div><p>French Fries</p></div></div>

                    <div className="iconcontainer"><img src={ikon5} alt="ikon5"></img>
                        <div><p>Fast Food</p></div></div>
                    <div className="iconcontainer"><img src={ikon6} alt="ikon6"></img>
                        <div><p>Soft Drinks</p></div></div>
                </div>

                <div className="yemekler">
                    <div className="yemek1">
                        <img src={food1} alt="food1" className="food1" />
                        <p><strong>Terminal Pizza</strong></p>
                        <div className="puanlama">
                            <div><p>4.9</p></div>
                            <div><p>(200)</p></div>
                            <div><p><strong>60TL</strong></p></div>
                        </div>
                    </div>

                    <div className="yemek2">
                        <img src={food2} alt="food1" className="food1" />
                        <p><strong>Position Absolute Acı Pizza</strong></p>
                        <div className="puanlama">
                            <div><p>4.9</p></div>
                            <div><p>(928)</p></div>
                            <div><p><strong>85TL</strong></p></div>
                        </div>
                    </div>

                    <div className="yemek3">
                        <img src={food3} alt="food1" className="food1" />
                        <p><strong>useEffect Tavuklu Burger</strong></p>
                        <div className="puanlama">
                            <div><p>4.9</p></div>
                            <div><p>(462)</p></div>
                            <div><p><strong>75TL</strong></p></div>
                        </div>
                    </div>

                </div>



            </div>

            <footer className="footer">
                <div className="footersira1">
                    <div class="row">
                        <div className="footerbaslik"><p className="footeryazi">TEKNOLOJİK<br /> YEMEKLER</p></div>
                        <div className="iletisim">
                            <img src={iletisim1}></img>
                            <p>341 Londonderry Road,
                                Istanbul Türkiye</p>
                        </div>


                        <div className="iletisim">
                            <img src={iletisim2}></img>
                            <p>aciktim@teknolojikyemekler.com</p>
                        </div>
                        <div className="iletisim">
                            <img src={iletisim3}></img>
                            <p>+90 216 123 45 67</p>
                        </div>


                    </div>
                </div>
                <div className="footersira2">
                    <p className="Sicak"><strong >Sıccacık Menüler</strong></p>
                    <p>Terminal Pizza</p>
                    <p>5 Kişilik Hackathlon Pizza </p>
                    <p>useEffect Tavuklu Pizza</p>
                    <p>Beyaz Console Frosty</p>
                    <p>Testler Geçti Mutlu Burger</p>
                    <p>Position Absolute Acı Burger</p>
                </div>

                <div className="footersira3">
                    <p>Instagram</p>
                    <img src={insta1} alt="insta1" />
                    <img src={insta2} alt="insta2" />
                    <img src={insta3} alt="insta3" />
                    <img src={insta4} alt="insta4" />
                    <img src={insta5} alt="insta5" />
                    <img src={insta6} alt="insta6" />
                </div>





            </footer >














        </div >
    )
}
export default AnasayfaAdv;
/*
<div class="footer">
                   <div className="footer1">




                       <div className="footer1">
                           <p>TEKNOLOJİK YEMEKLER</p>
                           <div class="row">
                               <a href="#"><i class="fa fa-facebook"></i></a>
                               <a href="#"><i class="fa fa-instagram"></i></a>
                               <a href="#"><i class="fa fa-youtube"></i></a>
                               <a href="#"><i class="fa fa-twitter"></i></a>
                           </div>

                           <div class="row">
                               <ul>
                                   <li><Link to="https://duckduckgo.com/?q=istanbul&atb=v367-7__&ia=web&iaxm=about" className="text-black pr-15  hover:text-red no-underline">
                                       <img className="inline pr-5" src={iletisim1}></img>
                                       341 Londonderry Road,<div>
                                           Istanbul Türkiye
                                       </div>
                                   </Link>
                                       <Link to="" className="text-black pr-15  hover:text-red no-underline">
                                           <img className="inline pr-5" src={iletisim2}></img>
                                           aciktim@teknolojikyemekler.com
                                       </Link>
                                       <Link to="" className="text-black pr-15  hover:text-red no-underline">
                                           <img className="inline pr-5" src={iletisim3}></img>
                                           +90 216 123 45 67
                                       </Link></li>

                               </ul>
                           </div>
                       </div>
                       <div>
                           <p>Sıccacık Menüler</p>
                       </div>

                       <div>
                           <p>Instagram</p>
                       </div>


                       <div class="row">
                           © 2023 Teknolojik Yemekler
                       </div>
                   </div>
               </div> */