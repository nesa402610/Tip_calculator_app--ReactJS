import React, {useEffect, useState} from 'react';

const Form = ({billHandler, tipHandler, peopleHandler, reset}) => {
    const tips = [
        {
            id: 1,
            value: 5,
        }, {
            id: 2,
            value: 10,
        }, {
            id: 3,
            value: 15,
        }, {
            id: 4,
            value: 25,
        }, {
            id: 5,
            value: 50,
        }
    ];
    const [selectedTip, setSelectedTip] = useState({id: 0, value: 0});
    const [bill, setBill] = useState('');
    const [people, setPeople] = useState('');
    const selectTips = (e, tip) => {
        setSelectedTip({id: tip.id, value: tip.value});
        // if (id === 0) {
        //
        // }
    };

    useEffect(() => { //bill callback
        billHandler(bill);
    }, [bill, billHandler]);
    useEffect(() => { // tip callback
        tipHandler(selectedTip.value);
    }, [selectedTip, tipHandler]);
    useEffect(() => {
        peopleHandler(people);
    }, [people, peopleHandler]);
    useEffect(() => {
        setSelectedTip({id: 0, value: 0});
        setBill('');
        setPeople('');
    }, [reset]);
    return (
        <div className="calculator__form">
            <div className={'calc__form__group'}>
                <label> Bill </label>
                <input type="text" value={bill} onChange={event => setBill(event.target.value)} placeholder={0}/>
            </div>
            <div className="calc__form__group">
                <label>
                    Select Tip %
                </label>
                <div className={'calc__form__group--tips'}>
                    {tips.map(tip =>
                        <div onClick={e => selectTips(e, tip)}
                             className={'calc__form__group--tip' + (selectedTip.id === tip.id ? ' active' : '')}
                             key={tip.id}>{tip.value}</div>
                    )}
                    {selectedTip === 0
                        ?
                        <div className={'calc__form__group--tip'}>
                            <input className={''} type="text"/>
                        </div>
                        :
                        <div onClick={e => selectTips(e, 0)}
                             className={'calc__form__group--tip'}>
                            Custom
                        </div>
                    }
                </div>
            </div>
            <div className="calc__form__group">
                <label>Number of People</label>
                <input type="text" value={people} onChange={e => setPeople(e.target.value)} placeholder={0}/>
            </div>
        </div>
    );
};

export default Form;