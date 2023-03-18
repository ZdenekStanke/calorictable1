import React, {useEffect, useState} from "react";
import './App.css';
import pc1 from './icons8-gas-52.png';
import pc2 from './icons8-thanksgiving-100.png';
import pc4 from './icons8-hamburger-96.png';
import pc3 from './icons8-whole-apple-96.png';
import pc5 from './icons8-apple-96.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import ReactDOM from 'react-dom'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'

import {faSistrix} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'

import {Modal} from "./Modal";


// const getPotravina = async (id) => {
//     const res = await fetch(`http://localhost:3030/` + id, {
//         headers: {
//             "Accept": "application/json",
//         },
//         method: "GET",
//     });
//     let data = res.json()
//     return await data;
// }

function App() {

    const [potraviny, setPotraviny] = useState([])
    const [filterName, setFilterName] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const getPotravina = async (id) => {
        const res = await fetch(`http://localhost:3030/` + id, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "GET",
        });
        const data = await res.json();
        setPotraviny(data)
        setLoaded(true)
    };



    useEffect(() => {
        if (!loaded) {
            getPotravina("")

        }

        let progressBar = document.querySelector(".circular-progress");

        let valueContainer = document.querySelector(".value-container");


        let progressValue = 0;
        let progressEndValue = 100;
        let speed = 10;

        let progress = setInterval(() => {
            progressValue++;
            // console.log(valueContainer)
            valueContainer.innerHTML = `${progressValue}` + "%";
            progressBar.style.background = `conic-gradient(
      #0054fe ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
            if (progressValue === progressEndValue) {
                clearInterval(progress);
            }
        }, speed);
        let progressBar1 = document.querySelector(".circular-progress1");
        let valueContainer1 = document.querySelector(".value-container1");

        let progressValue1 = 0;
        let progressEndValue1 = 80;
        let speed1 = 10;

        let progress1 = setInterval(() => {
            progressValue1++;
            valueContainer1.textContent = `${progressValue1}%`;
            progressBar1.style.background = `conic-gradient(
      #339AF0 ${progressValue1 * 3.6}deg,
      #cadcff ${progressValue1 * 3.6}deg
  )`;
            if (progressValue1 === progressEndValue1) {
                clearInterval(progress1);
            }
        }, speed1);


        let progressBar2 = document.querySelector(".circular-progress2");
        let valueContainer2 = document.querySelector(".value-container2");

        let progressValue2 = 0;
        let progressEndValue2 = 90;
        let speed2 = 10;

        let progress2 = setInterval(() => {
            progressValue2++;
            valueContainer2.textContent = `${progressValue2}%`;
            progressBar2.style.background = `conic-gradient(
      #f9ce23 ${progressValue2 * 3.6}deg,
      #cadcff ${progressValue2 * 3.6}deg
  )`;
            if (progressValue2 === progressEndValue2) {
                clearInterval(progress2);
            }
        }, speed2);

        let progressBar3 = document.querySelector(".circular-progress3");
        let valueContainer3 = document.querySelector(".value-container3");

        let progressValue3 = 0;
        let progressEndValue3 = 30;
        let speed3 = 10;

        let progress3 = setInterval(() => {
            progressValue3++;
            valueContainer3.textContent = `${progressValue3}%`;
            progressBar3.style.background = `conic-gradient(
      hotpink ${progressValue3 * 3.6}deg,
      #cadcff ${progressValue3 * 3.6}deg
  )`;
            if (progressValue3 === progressEndValue3) {
                clearInterval(progress3);
            }
        }, speed3);
    })

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);
    const [total, setTotal] = useState(number1 + number2 + number3)
    const [bilk, bilkTotal] = useState(number1 + number2 + number3)
    const [tuk, tukTotal] = useState(number1 + number2 + number3)
    const [sach, sachTotal] = useState(number1 + number2 + number3)

    function addThem() {
        setTotal(66 + (14 * number2) + (5 * number1) - (7 * number3));
        bilkTotal(number2 * 1.64)
        tukTotal(number2 * 0.75)
        sachTotal(number2 * 3.2)
    }

    const [ulozenePotraviny, setUlozenePotraviny] = useState([])
    function vlozPotravinu(potravina) {
        let data = getPotravina('')
        ulozenePotraviny.push({
            Nazev: potravina.Nazev,
            Kcal: potravina.Kcal,
            Sacharidy: potravina.Sacharidy,
            Bilkoviny: potravina.Bilkoviny,
            Tuky: potravina.Tuky});
        console.log(ulozenePotraviny)
        setUlozenePotraviny(ulozenePotraviny)
        kcalSummaryPotraviny(ulozenePotraviny)
        sachSummaryPotraviny(ulozenePotraviny)
        bilkSummaryPotraviny(ulozenePotraviny)
        tukSummaryPotraviny(ulozenePotraviny)
    }

    const [kcalCelekm, setKcalCelekm] = useState(0)

    function kcalSummaryPotraviny(potraviny) {
        let summary = 0
        for (let i = 0; i < potraviny.length; i++) {
            summary += potraviny[i].Kcal
        }
        setKcalCelekm(summary)
        console.log(kcalCelekm)
    }
    const [sachCelekm, setSachCelekm] = useState(0)

    function sachSummaryPotraviny(potraviny) {
        let summary = 0
        for (let i = 0; i < potraviny.length; i++) {
            summary += potraviny[i].Sacharidy
        }
        setSachCelekm(summary)
        console.log(sachCelekm)
    }
    const [bilkCelekm, setBilkCelekm] = useState(0)

    function bilkSummaryPotraviny(potraviny) {
        let summary = 0
        for (let i = 0; i < potraviny.length; i++) {
            summary += potraviny[i].Bilkoviny
        }
        setBilkCelekm(summary)
        console.log(bilkCelekm)
    }
    const [tukCelekm, setTukCelekm] = useState(0)

    function tukSummaryPotraviny(potraviny) {
        let summary = 0
        for (let i = 0; i < potraviny.length; i++) {
            summary += potraviny[i].Tuky
        }
        setTukCelekm(summary)
        console.log(tukCelekm)
    }



    if (!loaded) {
        return (
            <>
                <p>loading...</p>
            </>
        );
    }

    return (


        <div className="App">


            <div className="graf1">
                <div id="Honza" className="circular-progress">
                    <div id="Honza2" className="value-container">0%</div>
                    <div className="text2">{kcalCelekm}kcal</div>
                </div>

                <div className="text">Celkem kcal</div>
            </div>
            <div className="graf2">
                <div className="circular-progress1">
                    <div className="value-container1">0%</div>
                    <div className="text2">120g</div>
                </div>

                <div className="text">Bílkoviny</div>

            </div>
            <div className="graf3">
                <div className="circular-progress2">
                    <div className="value-container2">0%</div>
                    <div className="text2">48g</div>
                </div>

                <div className="text">Sacharidy</div>

            </div>
            <div className="graf4">
                <div className="circular-progress3">
                    <div className="value-container3">0%</div>
                    <div className="text2">6g</div>
                </div>

                <div className="text">Tuky</div>
            </div>


            <div className="hledani">

            </div>
            <div className="kcal">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="textFrontCard">
                            <p className="textkcal">{total}</p>
                            <p className="textkcal1">průměr kcal</p>
                        </div>


                        <div className="kcal1">
                            <img className="pic1" src={pc1}/>

                        </div>
                    </div>
                    <div className="flip-card-back">

                        <img className="pic10" src={pc1}/>
                        <p className="textvaha">kcal</p>

                        <p className="text10">zde si mužeš nastavit vlastni hodnotu kcal</p>

                        <input className="input5" type="number" placeholder={setTotal} value={total}
                               onChange={e => setTotal(+e.target.value)}/>

                    </div>

                </div>
            </div>
            <div className="bilk">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="textFrontCard">
                            <p className="textbilk">{bilk}</p>
                            <p className="textkcal1">průměr bílkovin</p>
                        </div>

                        <div className="bilk1">
                            <img className="pic1" src={pc2}/>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <p className="text6">průměr bilkovin</p>
                        <img className="pic10" src={pc2}/>
                        <input className="input5" type="number" placeholder={bilkTotal} value={bilk}
                               onChange={e => bilkTotal(+e.target.value)}/>

                        <p className="textvaha">g</p>


                    </div>

                </div>
            </div>
            <div className="sach">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="textFrontCard">
                            <p className="textsach">{sach}</p>
                            <p className="textkcal1">průměr sacharidů</p>
                        </div>

                        <div className="sach1">
                            <img className="pic1" src={pc3}/>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <img className="pic10" src={pc3}/>
                        <p className="text6">průměr sacharidů</p>
                        <input className="input5" type="number" placeholder={sachTotal} value={sach}
                               onChange={e => sachTotal(+e.target.value)}/>

                    </div>

                </div>

            </div>
            <div className="tuk">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="textFrontCard">
                            <p className="texttuky">{tuk}</p>
                            <p className="textkcal1">průměr tuku</p>
                        </div>

                        <div className="tuk1">
                            <img className="pic1" src={pc4}/>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <img className="pic10" src={pc4}/>
                        <p className="text6">průměr tuků</p>
                        <input className="input5" type="number" placeholder={tukTotal} value={tuk}
                               onChange={e => tukTotal(+e.target.value)}/>

                    </div>
                </div>
            </div>

            <div className="nabidka">


                <img className="pc5" src={pc5}/>

                <p className="kcalkalkul">Kcalkalkulačka</p>


                <button onClick={addThem} className="novejcil"> Novej cíl</button>


                <input className="input1" type="number" placeholder="0" value={number1}
                       onChange={e => setNumber1(+e.target.value)}/><p className="p1">výška/cm</p>
                <input className="input2" type="number" placeholder="0" value={number2}
                       onChange={e => setNumber2(+e.target.value)}/><p className="p2">váha/kg </p>
                <input className="input3" type="number" placeholder="0" value={number3}
                       onChange={e => setNumber3(+e.target.value)}/><p className="p3">věk/roky</p>


            </div>

            <div className="tabulka">
                <form className="mojetlacitko">
                    <input type={"text"} onChange={(e) => setFilterName(e.target.value)} className="hledacipanel"
                           placeholder="Hledat potraviny"/>
                    <div>
                        <table>
                            {/*{setChangedPotraviny(potraviny.filter(potravina => potravina.Name.includes(document.querySelector(".hledacipanel").value.toString())))}*/}
                            {potraviny.result.filter(potravina => potravina.Nazev.includes(filterName)).map((potravina) => (
                                <tr>
                                    <td>{potravina.Nazev}</td>
                                    <td>{potravina.Kcal}kcal</td>
                                    <td>Sach. {potravina.Sacharidy}g</td>
                                    <td>Blik. {potravina.Bilkoviny}g</td>
                                    <td>Tuky {potravina.Tuky}g</td>
                                    <td>
                                        <button  onClick={(e) => {
                                            vlozPotravinu(potravina)
                                            e.preventDefault()
                                        }}>Pridat</button>
                                    </td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </form>

                <div className="vybranePotraviny">
                    <table>
                        <tr>
                            <th>Nazev</th>
                            <th>Kcal</th>
                            <th>Sacharidy</th>
                            <th>Bilkoviny</th>
                            <th>Tuky</th>
                            <th>Hmotnost</th>
                        </tr>
                        {ulozenePotraviny.map((ulozenaPotravina) => (
                            <tr>
                                <td>{ulozenaPotravina.Nazev}</td>
                                <td>{ulozenaPotravina.Kcal}kcal</td>
                                <td>{ulozenaPotravina.Sacharidy}g</td>
                                <td>{ulozenaPotravina.Bilkoviny}g</td>
                                <td>{ulozenaPotravina.Tuky}g</td>
                                <td> <input placeholder="1"/> * 100g</td>
                            </tr>
                        ))}
                    </table>
                </div>


            </div>

            <div className="button2">
                <div className="facebok">
                    <div className="icon">
                        <FontAwesomeIcon icon={faFacebookF} className="Applogo"/>
                    </div>

                </div>
            </div>
            <div className="button1">
                <div className="twitter">
                    <div className="icon">
                        <FontAwesomeIcon icon={faTwitter} className="Applogo"/>
                    </div>

                </div>
            </div>
            <div className="button1">
                <div className="instagram">
                    <div className="icon">
                        <FontAwesomeIcon icon={faInstagram} className="Applogo"/>
                    </div>
                </div>
            </div>
            <div className="button1">
                <div className="git">
                    <div className="icon">
                        <FontAwesomeIcon icon={faGithub} className="Applogo"/>
                    </div>
                </div>
            </div>
            <h1>{kcalCelekm}</h1>
            <h1>{sachCelekm}</h1>
            <h1>{bilkCelekm}</h1>
            <h1>{tukCelekm}</h1>
        </div>
    );

}

export default App;
