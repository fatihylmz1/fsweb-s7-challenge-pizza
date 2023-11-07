import React, { useState, useEffect } from 'react';
import "./SiparisFormuMvp.css";


function Pizzasecim() {

    const [isCheckedpepperoni, setIsCheckedpepperoni] = useState(false);
    const [isCheckedtavuk, setIsCheckedtavuk] = useState(false);
    const [isCheckedmısır, setIsCheckedmısır] = useState(false);
    const [isCheckedsarımsak, setIsCheckedsarımsak] = useState(false);
    const [isCheckedananas, setIsCheckedananas] = useState(false);
    const [isCheckedsosis, setIsCheckedsosis] = useState(false);
    const [isCheckedsoğan, setIsCheckedsoğan] = useState(false);
    const [isCheckedsucuk, setIsCheckedsucuk] = useState(false);
    const [isCheckedbiber, setIsCheckedbiber] = useState(false);
    const [isCheckedkabak, setIsCheckedkabak] = useState(false);
    const [isCheckedkanadajambon, setIsCheckedkanadajambon] = useState(false);
    const [isCheckeddomates, setIsCheckeddomates] = useState(false);
    const [isCheckedjalepeno, setIsCheckedjalepeno] = useState(false);
    const [pizzafiyat, setPizzafiyat] = useState(85.50);
    const [ekmalzemefiyat, setEkmalzemefiyat] = useState(0);
    const [toplamfiyat, setToplamfiyat] = useState(0);
    const [pizzasayisi, setPizzasayisi] = useState(0);
    const [inputValueisim, setInputValueisim] = useState('');
    const [inputValuenot, setInputValuenot] = useState('');



    function setArttır() {
        setPizzasayisi(pizzasayisi + 1);
    };
    console.log(pizzasayisi);
    function setAzalt() {
        setPizzasayisi(pizzasayisi - 1);
    };


    const handlePepperoniChange = () => {
        setIsCheckedpepperoni(!isCheckedpepperoni);
        setEkmalzemefiyat(!isCheckedpepperoni ? ekmalzemefiyat + 5 : ekmalzemefiyat - 5);
    };
    console.log(ekmalzemefiyat);

    const handleTavukChange = () => {
        setIsCheckedtavuk(!isCheckedtavuk);
        setEkmalzemefiyat(!isCheckedtavuk ? ekmalzemefiyat + 5 : ekmalzemefiyat - 5);
    };
    const handleMısırChange = () => {
        setIsCheckedmısır(!isCheckedmısır);
        setEkmalzemefiyat(!isCheckedmısır ? ekmalzemefiyat + 5 : ekmalzemefiyat - 5);
    };
    const handlesarımsakChange = () => {
        setIsCheckedsarımsak(!isCheckedsarımsak);
        setEkmalzemefiyat(!isCheckedsarımsak ? ekmalzemefiyat + 5 : ekmalzemefiyat - 5);
    };
    const handleananasChange = () => {
        setIsCheckedananas(!isCheckedananas);
        setEkmalzemefiyat(!isCheckedananas ? ekmalzemefiyat + 5 : ekmalzemefiyat - 5);
    };
    const handlesosisChange = () => {
        setIsCheckedsosis(!isCheckedsosis);
        setEkmalzemefiyat(!isCheckedsosis ? ekmalzemefiyat + 5 : ekmalzemefiyat - 5);
    };
    const handlesoğanChange = () => {
        setIsCheckedsoğan(!isCheckedsoğan);
        setEkmalzemefiyat(!isCheckedsoğan ? ekmalzemefiyat + 5 : ekmalzemefiyat - 5);
    };
    const handlesucukChange = () => {
        setIsCheckedsucuk(!isCheckedsucuk);
        setEkmalzemefiyat(!isCheckedsucuk ? ekmalzemefiyat + 5 : ekmalzemefiyat - 5);
    };
    const handlebiberChange = () => {
        setIsCheckedbiber(!isCheckedbiber);
        setEkmalzemefiyat(!isCheckedbiber ? ekmalzemefiyat + 5 : ekmalzemefiyat - 5);
    };
    const handlekabakChange = () => {
        setIsCheckedkabak(!isCheckedkabak);
        setEkmalzemefiyat(!isCheckedkabak ? ekmalzemefiyat + 5 : ekmalzemefiyat - 5);
    };
    const handlekanadajambonuChange = () => {
        setIsCheckedkanadajambon(!isCheckedkanadajambon);
        setEkmalzemefiyat(!isCheckedkanadajambon ? ekmalzemefiyat + 5 : ekmalzemefiyat - 5);
    };
    const handledomatesChange = () => {
        setIsCheckeddomates(!isCheckeddomates);
        setEkmalzemefiyat(!isCheckeddomates ? ekmalzemefiyat + 5 : ekmalzemefiyat - 5);
    };
    const handlejalepenoChange = () => {
        setIsCheckedjalepeno(!isCheckedjalepeno);
        setEkmalzemefiyat(!isCheckedjalepeno ? ekmalzemefiyat + 5 : ekmalzemefiyat - 5);
    };
    const handleChangeisim = (e) => {
        setInputValueisim(e.target.value);
    };
    const handleChangenot = (e) => {
        setInputValuenot(e.target.value);
    };
    useEffect(() => {
        setToplamfiyat(pizzafiyat * pizzasayisi + ekmalzemefiyat)

    }, [ekmalzemefiyat, pizzafiyat, pizzasayisi]);



    return (
        <div>
            <form className='malzemelistesi'>
                <label className='ürün'>
                    <input
                        type="checkbox"
                        checked={isCheckedpepperoni}
                        onChange={handlePepperoniChange}

                    />
                    Pepperoni
                </label>
                <label className='ürün'>
                    <input
                        type="checkbox"
                        checked={isCheckedtavuk}
                        onChange={handleTavukChange}
                    />
                    Tavuk Izgara
                </label >
                <label className='ürün'>
                    <input
                        type="checkbox"
                        checked={isCheckedmısır}
                        onChange={handleMısırChange}
                    />
                    Mısır
                </label>
                <label className='ürün'>
                    <input
                        type="checkbox"
                        checked={isCheckedsarımsak}
                        onChange={handlesarımsakChange}
                    />
                    Sarımsak
                </label>
                <label className='ürün'>
                    <input
                        type="checkbox"
                        checked={isCheckedananas}
                        onChange={handleananasChange}
                    />
                    Ananas
                </label>
                <label className='ürün'>
                    <input
                        type="checkbox"
                        checked={isCheckedsosis}
                        onChange={handlesosisChange}
                    />
                    Sosis
                </label>
                <label className='ürün'>
                    <input
                        type="checkbox"
                        checked={isCheckedsoğan}
                        onChange={handlesoğanChange}
                    />
                    Soğan
                </label>
                <label className='ürün'>
                    <input
                        type="checkbox"
                        checked={isCheckedsucuk}
                        onChange={handlesucukChange}
                    />
                    Sucuk
                </label>
                <label className='ürün'>
                    <input
                        type="checkbox"
                        checked={isCheckedbiber}
                        onChange={handlebiberChange}
                    />
                    Biber
                </label>
                <label className='ürün'>
                    <input
                        type="checkbox"
                        checked={isCheckedkabak}
                        onChange={handlekabakChange}
                    />
                    Kabak
                </label>
                <label className='ürün'>
                    <input
                        type="checkbox"
                        checked={isCheckedkanadajambon}
                        onChange={handlekanadajambonuChange}
                    />
                    Kanada Jambonu
                </label>
                <label className='ürün'>
                    <input
                        type="checkbox"
                        checked={isCheckeddomates}
                        onChange={handledomatesChange}
                    />
                    Domates
                </label>
                <label className='ürün'>
                    <input
                        type="checkbox"
                        checked={isCheckedjalepeno}
                        onChange={handlejalepenoChange}
                    />
                    Jalepeno
                </label>

            </form>
            <div className="not">
                <div>
                    <label>
                        <div><strong>Müşteri Adı</strong></div>
                        <input type="text" value={inputValueisim} onChange={handleChangeisim} className='siparisnot' placeholder='Lütfen müşteri adı giriniz.' />
                    </label>
                </div>
            </div>


            <div className="not">
                <div>
                    <label>
                        <div><strong>Sipariş Notu</strong></div>
                        <input type="text" value={inputValuenot} onChange={handleChangenot} className='siparisnot' placeholder='Siparişinize eklemek istediğiniz bir not var mı?' />
                    </label>
                </div>
                <hr className="line" />
            </div>

            <div className='sayfasonu'>
                <div className="counter">
                    <button onClick={setArttır} className="btnMvp1">+</button>
                    <div className="pizzasayisi"><p>{pizzasayisi}</p></div>
                    <button onClick={setAzalt} className="btnMvp2">-</button>
                </div>


                <div className='siparisbilgi'>
                    <div className='siparistoplam'><p><strong>Sipariş Toplamı</strong></p></div>
                    <div className='fiyatbilgisi'>
                        <div><p>Seçimler</p></div>
                        <div><p>{ekmalzemefiyat} TL</p></div>

                    </div>
                    <div className='fiyatbilgisi'>
                        <div><p className='toplamyazi'>Toplam</p></div>
                        <div><p>{toplamfiyat} TL</p></div>
                    </div>
                    <div>
                        <button className='siparisbtn'>SİPARİŞ VER</button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Pizzasecim;
