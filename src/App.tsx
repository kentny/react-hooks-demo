import React from 'react';
import './App.css';
import {InputForm} from "./InputForm";

function App() {
    return (
        <div className="App">
            <InputForm title="Use Hooks" onChange={() => {
            }}/>
            <InputForm title="Use setState" onChange={() => {
            }}/>
        </div>
    );
}

export default App;
