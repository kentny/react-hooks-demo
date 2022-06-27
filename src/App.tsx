import React, {useState} from 'react';
import './App.css';
import {DataType, TypeSelectorForm} from "./TypeSelectorForm";
import {HttpAPIInfrastructure} from "./infrastructure/HttpAPI";
import {HttpAPIDataRepository} from "./repository/DataRepository";

function App() {
    const [data, setData] = useState<DataType[]>([])
    const httpAPI = new HttpAPIInfrastructure("https://jsonplaceholder.typicode.com")
    const repo = new HttpAPIDataRepository(httpAPI)

    const onReceiveData = (data: DataType[]) => {
        setData(data)
    }

    return (
        <div className="App">
            <TypeSelectorForm {...{title: "Select A Type", repo: repo, onReceiveData: onReceiveData}}/>
            <table>
                <thead>
                <tr>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((_data, index) => {
                        return (
                            <tr key={index}>
                                {
                                    Object.keys(_data).map((key) => {
                                        return (
                                            <td>{_data[key]}</td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

export default App;
