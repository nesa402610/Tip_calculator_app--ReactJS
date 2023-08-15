import React, {useState} from 'react';

const Form = ({setBill, setTip, setPeople, bill, tip, people}) => {
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
  const selectTips = (tip) => {
    setTip(tip);
  };
  return (
    <div className="calculator__form">
      <div className={'calc__form__group'}>
        <label> Bill </label>
        <input type="text" value={bill} onChange={e => setBill(+e.target.value)} placeholder={0}/>
      </div>
      <div className="calc__form__group">
        <label>
          Select Tip %
        </label>
        <div className={'calc__form__group--tips'}>
          {tips.map(t =>
            <div onClick={() => selectTips(t.value)}
                 className={'calc__form__group--tip' + (tip?.value == t.value ? ' active' : '')}
                 key={t.id}>{t.value}</div>
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
        <input type="text" value={people} onChange={e => setPeople(e.target.value)} placeholder={1}/>
      </div>
    </div>
  );
};

export default Form;
