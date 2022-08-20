import React, {useEffect, useState} from 'react';

const Card = ({billVal, tipVal, people, resetHandler}) => {
    const [total, setTotal] = useState(0);
    const [tip, setTip] = useState(0);
    const [tipAmoutn, setTipAmount] = useState(0);
    const [bill, setBill] = useState('0.00');

    const resetButton = () => {
        resetHandler(true);
    };

    useEffect(() => {
        setBill(billVal);
    }, [billVal]);
    useEffect(() => {
        setTip(tipVal);
        setTipAmount(((bill * (tip / 100)) / people).toFixed(2));
    }, [bill, people, tip, tipVal]);
    useEffect(() => {
        setTotal(((+bill / people + +tipAmoutn)).toFixed(2));
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
                <button onClick={resetButton}>RESET</button>
            </div>
        </div>
    );
};

export default Card;