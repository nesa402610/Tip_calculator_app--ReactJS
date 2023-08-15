import React, {useState} from 'react';
import './App.css';
import Form from "./components/form";
import Card from "./components/card/card";


const App = () => {
    const [bill, setBill] = useState(0);
    const [tip, setTip] = useState(0);
    const [people, setPeople] = useState(0);
    const resetHandler = () => {
        setBill(0)
        setTip(0)
        setPeople(0)
    };
    return (
        <>
            <main>
                <div className="calculator">
                    <Form
                        setBill={setBill} bill={bill}
                        setTip={setTip} tip={tip}
                        setPeople={setPeople} people={people}
                        reset={resetHandler}
                    />
                    <Card bill={bill} tip={tip} people={people} resetHandler={resetHandler}/>
                </div>
            </main>
        </>
    );
};

export default App;
