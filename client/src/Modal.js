import React, {useState} from 'react';
import styled from 'styled-components';
import './Model.css';
import create from "zustand";













 export const Modal  = ({showModal, setShowModal,  }) => {


    const [number1, setNumber1]  = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);
    const [total, setTotal] = useState(number1 + number2 + number3)
    const [bilk, bilkTotal] = useState(number1 + number2 + number3)
    const [tuk, tukTotal] = useState(number1 + number2 + number3)
    const [sach, sachTotal] = useState(number1 + number2 + number3)

  function addThem(){
    setTotal( 66 + (14 * number2) + (5 * number1) - (7 * number3));
    bilkTotal( number2 * 1.64)
    tukTotal(number2 * 0.75)
    sachTotal(number2 * 3.2)
  }


    return <>{showModal ?( <div className="Background">
        <div className="wraper">
            <div className="kalkulacka">
            <input type="number" placeholder="0" value={number1} onChange={e => setNumber1(+e.target.value)} /><p className="vyska">výška/cm</p>
            <input type="number" placeholder="0" value={number2} onChange={e => setNumber2(+e.target.value)}/><p className="vaha">váha/kg </p>
                <input type="number" placeholder="0" value={number3} onChange={e => setNumber3(+e.target.value)}/><p className="roky">věk/roky</p>

            </div>
          <h2>{total}kcal</h2>
          <h2>{bilk}bk</h2>
          <h2>{tuk}tuk</h2>
          <h2>{sach}sach</h2>

          <p><strong>váha</strong>:{number1}</p>


                  <button onClick={addThem}>Zadat čísla </button>
                <button onClick={() => setShowModal(prev => !prev)} className="zpet">  zpět </button>


        </div>
    </div>) : null}</>;
};
