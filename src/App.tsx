import React from 'react';
import './App.css';
import {InputFormHooks} from "./InputFormHooks";
import {HttpAPIInfrastructure} from "./infrastructure/HttpAPI";
import {HttpAPIDataRepository} from "./repository/DataRepository";

function App() {
    const httpAPI = new HttpAPIInfrastructure("https://jsonplaceholder.typicode.com")
    const repo = new HttpAPIDataRepository(httpAPI)

    return (
        <div className="App">
            <InputFormHooks title="Use Hooks" repo={repo} />
        </div>
    );
}

export default App;
