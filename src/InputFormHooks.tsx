import React, {useState} from "react";
import {DataRepository} from "./repository/DataRepository";

export type DataType = {
    [key: string]: any
}

export function InputFormHooks(props: { title: string, repo: DataRepository, onReceiveData: (data: DataType[]) => void}) {
    const {title, repo, onReceiveData} = props
    const [selectedValue, setSelectedValue] = useState<string>("albums")

    const getData = () => {
        switch (selectedValue) {
            case "albums":
                repo.albums().then(albums => {
                    onReceiveData(albums)
                })
                break
            case "todos":
                repo.todos().then(todos => {
                    onReceiveData(todos)
                })
                break
            default:
                break
        }
    }

    return <>
        <h2>
            {title}
        </h2>
        <form onSubmit={(e) => {
            e.preventDefault()
        }} >
            <label>
                <input type="radio" name="radio-buttons" value="albums" onChange={() => {
                    setSelectedValue("albums")
                }} defaultChecked/>
                ALBUMS
            </label>
            <label>
                <input type="radio" name="radio-buttons" value="todos" onChange={() => {
                    setSelectedValue("todos")
                }}/>
                TODOS
            </label>
            <button type='submit' onClick={() => {
                getData()
            }}>GET
            </button>
        </form>
    </>
}

