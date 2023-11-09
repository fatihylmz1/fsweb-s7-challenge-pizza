import React, { useState, useEffect } from 'react';
import "./SiparisFormuMvp.css";
import { Link } from 'react-router-dom';
import * as Yup from "yup";

const malzemeler = ["Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Soğan", "Domates", "Mısır", "Sucuk", "Jalepeno", "Sarımsak", "Biber", "Ananas", "Kabak"];


function Pizzasecim() {
    const [inputValueisim, setInputValueisim] = useState('');
    const [inputValuenot, setInputValuenot] = useState('');
    const [toplamfiyat, setToplamfiyat] = useState(0);
    const [pizzasayisi, setPizzasayisi] = useState(0);
    const [ekmalzemefiyat, setEkmalzemefiyat] = useState(0);
    const [secilenürünler, setSecilenürünler] = useState([]);
    const [pizzafiyat, setPizzafiyat] = useState(85.50);
    const [isFormValid, setIsFormValid] = useState(false)
    const [formpayload, setFormpayload] = useState({
        name: "",
        boyut: "",
        pricemalzeme: "",
        pricecounter: "",
        özel: "",
    });
    const [formErrors, setFormErrors] = useState({
        name: "",
        pricecounter: "",
        pricemalzeme: "",

    });
    const [formValid, setFormValid] = useState(true);


    const formSchema = Yup.object().shape({
        name: Yup.string()
            .required("İsim alanı boş bırakılamaz!")
            .min(3, "Ürün ismi 3 karakterden az olamaz."),
        pricecounter: Yup.number().positive("Fiyat bilgisi eksi değer alamaz."),
        pricemalzeme: Yup.number().min(20, "En az 4 adet malzeme eklemelisiniz!").max(50, "En fazla 10 malzeme ekleyebilirsiniz!")
    });

    const validateInput = (name, value) => {
        Yup.reach(formSchema, name).validate(value)
            .then((valid) => {
                console.log("validateInput", valid)
                const newErrors = {
                    ...formErrors,
                    [name]: null
                }
                setFormErrors(newErrors)
            })
            .catch((err) => {
                console.log(err.name, err.errors)
                const newErrors = {
                    ...formErrors,
                    [name]: err.errors[0]
                }
                setFormErrors(newErrors)
            })
    }

    const validateForm = (formpayload) => {
        formSchema.isValid(formpayload)
            .then((valid) => {
                console.log("validateForm", valid)
                setIsFormValid(valid)
            }).catch((err) => {
                console.log("validateForm", err.name, err.errors)
                console.log(err)
                setIsFormValid(false)
            })
    }

    useEffect(() => {
        formSchema
            .isValid(formpayload)
            .then(valid => setFormValid(valid));
    }, [formpayload]);





    function setArttır() {
        setPizzasayisi(pizzasayisi + 1);
    };

    function setAzalt() {
        setPizzasayisi(pizzasayisi - 1);
    };
    const handleChangeisim = (e) => {
        setInputValueisim(e.target.value);
    };
    const handleChangenot = (e) => {
        setInputValuenot(e.target.value);
    };

    const handleChange = (e, malzeme) => {
        setSecilenürünler({ ...secilenürünler, [malzeme]: e.target.checked });

    }


    useEffect(() => {
        let truearray = Object.values(secilenürünler);
        let malzemeler = truearray.filter((item) => item === true);
        setFormpayload({ secilenürünler });
        setEkmalzemefiyat(malzemeler.length * 5);
    }, [secilenürünler]);


    useEffect(() => {
        setToplamfiyat(pizzafiyat * pizzasayisi + ekmalzemefiyat)

    }, [ekmalzemefiyat, pizzafiyat, pizzasayisi]);





    return (
        <div>
            <div className='malzemelistesi'>
                {malzemeler.map((malzeme) => (
                    <label className='ürün'>
                        <input
                            type="checkbox"
                            name="ekmalzemeler"
                            onChange={(e) => handleChange(e, malzeme)}
                        />
                        {malzeme}
                    </label>))}
            </div>

            <div className="not">
                <div>
                    <label>
                        <div><strong>Müşteri Adı</strong></div>
                        <input type="text" value={inputValueisim} onChange={handleChangeisim} className='siparisnot' placeholder='Lütfen müşteri adı giriniz.' id='name-input' invalid={!!formErrors.name} />
                    </label>
                </div>
            </div>


            <div className="not">
                <div>
                    <label>
                        <div><strong>Sipariş Notu</strong></div>
                        <input type="text" value={inputValuenot} onChange={handleChangenot} className='siparisnot' placeholder='Siparişinize eklemek istediğiniz bir not var mı?' id='special-text' />
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
                        <div><p className='toplamyazi'>{toplamfiyat} TL</p></div>
                    </div>


                    <div>
                        <Link to="./siparisonay">
                            <button className='siparisbtn' id='order-button'>SİPARİŞ VER</button>
                        </Link>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default Pizzasecim;
