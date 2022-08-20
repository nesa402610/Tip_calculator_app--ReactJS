import React, {useState} from 'react';
import './App.css';
import Form from "./components/form";
import Card from "./components/card/card";


const App = () => {
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [people, setPeople] = useState('');
    const [isReset, setReset] = useState(false);
    const setBillHandler = (value) => {
        setBill(value);
    };
    const setTipHandler = (value) => {
        setTip(value);
    };
    const setPeopleHandler = (value) => {
        setPeople(value);
    };
    const setResetHandler = (value) => {
        setReset(value)
    };
    return (
        <>
            <main>
                <div className="calculator">
                    <Form
                        billHandler={setBillHandler}
                        tipHandler={setTipHandler}
                        peopleHandler={setPeopleHandler}
                        reset={isReset}


                    />
                    <Card billVal={bill} tipVal={tip} people={people} resetHandler={setResetHandler}/>
                </div>
            </main>
        </>
    );
};

export default App;