import React, {useEffect, useState} from 'react';

const Card = ({bill, tip, people, resetHandler}) => {
  const [total, setTotal] = useState(0);
  const [tipAmoutn, setTipAmount] = useState(0);


  useEffect(() => {
    console.log(bill, tip, people);
    if (bill && people) {
    setTotal(+((+bill / people + +tipAmoutn)).toFixed(2));
    setTipAmount(+((bill * (tip / 100) / people)).toFixed(2));
    } else {
      setTotal(0)
      setTipAmount(0)
    }
  }, [bill, people, tip, tipAmoutn]);
  return (
    <div className="calculator__card">
      <div className="calc__card__tip--calc">
        <div className={'calc__card__tip--info'}>
          <div className={'calc__card__tip--title'}>
            <div className={'calc__card__tip--name'}>
              Tip Amount
            </div>
            <div className={'calc__card__tip--person'}>
              / person
            </div>
          </div>
          <div className={'calc__card__tip--amount'}>
            {tipAmoutn === 0 ? '$0.00' : tipAmoutn}
          </div>
        </div>
        <div className="calc__card__tip--info">
          <div className={'calc__card__tip--title'}>
            <div className={'calc__card__tip--name'}>
              Total
            </div>
            <div className={'calc__card__tip--person'}>
              / person
            </div>
          </div>
          <div className={'calc__card__tip--amount'}>
            ${total === 0 ? '0.00' : total}
          </div>
        </div>
      </div>
      <div>
        <button onClick={resetHandler}>RESET</button>
      </div>
    </div>
  );
};

export default Card;
