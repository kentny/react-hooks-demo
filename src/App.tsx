import React, {useState} from 'react';
import './App.css';
import {DataChunk, TypeSelectorForm} from "./TypeSelectorForm";
import {HttpAPI, HttpAPIInfrastructure} from "./infrastructure/HttpAPI";
import {DataRepository, HttpAPIDataRepository} from "./repository/DataRepository";
import {Album} from "./entity/Album";
import {Todo} from "./entity/Todo";

type AppProps = {
    dataRepository?: DataRepository
}

function App(appProps: AppProps) {
    const [dataChunk, setDataChunk] = useState<DataChunk>()

    const onReceiveData = (dataChunk: DataChunk) => {
        setDataChunk(dataChunk)
    }

    const createHeader =  () => {
        if (dataChunk === undefined || dataChunk.data.length === 0) {
            return <></>
        }

        if (dataChunk.type === 'album') {
            return <>
                <th>ID</th>
                <th>UserID</th>
                <th>Title</th>
            </>
        }

        if (dataChunk.type === 'todo') {
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
        if (dataChunk === undefined || dataChunk.data.length === 0) {
            return <></>
        }

        if (dataChunk.type === 'album') {
            return dataChunk.data.map((_data, index) => {
                const album = _data as Album
                return <tr key={index}>
                    <td>{album.id}</td>
                    <td>{album.userId}</td>
                    <td>{album.title}</td>
                </tr>
            })
        }

        if (dataChunk.type === 'todo') {
            return dataChunk.data.map((_data, index) => {
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
            {appProps.dataRepository !== undefined &&
                <TypeSelectorForm
                    {...{title: "GET DATA", repo: appProps.dataRepository, onReceiveData: onReceiveData}}
                />
            }
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
