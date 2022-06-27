import React, {useState} from 'react';
import './App.css';
import {DataType, TypeSelectorForm} from "./TypeSelectorForm";
import {HttpAPIInfrastructure} from "./infrastructure/HttpAPI";
import {HttpAPIDataRepository} from "./repository/DataRepository";
import {Album} from "./entity/Album";
import {Todo} from "./entity/Todo";

function App() {
    const [data, setData] = useState<DataType[]>([])
    const httpAPI = new HttpAPIInfrastructure("https://jsonplaceholder.typicode.com")
    const repo = new HttpAPIDataRepository(httpAPI)

    const onReceiveData = (data: DataType[]) => {
        console.log(data)
        setData(data)
    }

    const createHeader =  () => {
        console.log(data)

        if (data.length == 0) {
            return <></>
        }
        console.log(`data[0].kind: ${data[0].kind}`)

        if (data[0].kind == 'album') {
            return <>
                <th>ID</th>
                <th>UserID</th>
                <th>Title</th>
            </>
        }

        if (data[0].kind == 'todo') {
            return <>
                <th>ID</th>
                <th>UserID</th>
                <th>Title</th>
                <th>Completed</th>
            </>
        }
        return <></>
    }

    const createBody = () => {
        if (data.length == 0) {
            return <></>
        }

        if (data[0].kind == 'album') {
            return data.map((_data, index) => {
                const album = _data as Album
                return <tr key={index}>
                    <td>{album.id}</td>
                    <td>{album.userId}</td>
                    <td>{album.title}</td>
                </tr>
            })
        }

        if (data[0].kind == 'todo') {
            return data.map((_data, index) => {
                const todo = _data as Todo
                return <tr key={index}>
                    <td>{todo.id}</td>
                    <td>{todo.userId}</td>
                    <td>{todo.title}</td>
                    <td>{todo.completed ? "TRUE" : "FALSE"}</td>
                </tr>
            })
        }
        return <></>

    }

    return (
        <div className="App">
            <TypeSelectorForm {...{title: "Select A Type", repo: repo, onReceiveData: onReceiveData}}/>
            <table>
                <thead>
                <tr>
                    {createHeader()}
                </tr>
                </thead>
                <tbody>
                {createBody()}
                </tbody>
            </table>
        </div>
    );
}

export default App;
