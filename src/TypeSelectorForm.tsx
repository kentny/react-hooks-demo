import React, {useState} from "react";
import {DataRepository} from "./repository/DataRepository";
import {Album} from "./entity/Album";
import {Todo} from "./entity/Todo";

export type DataChunk = {
    type: 'album' | 'todo',
    data: Album[] | Todo[]
}

export type InputFormProps = {
    title: string,
    repo: DataRepository,
    onReceiveData: (data: DataChunk) => void
}

export function TypeSelectorForm(props: InputFormProps) {
    const {title, repo, onReceiveData} = props
    const [selectedValue, setSelectedValue] = useState<string>("albums")

    const getData = () => {
        switch (selectedValue) {
            case "albums":
                repo.albums().then(albums => {
                    onReceiveData({
                        type: 'album',
                        data: albums,
                    })
                })
                break
            case "todos":
                repo.todos().then(todos => {
                    onReceiveData({
                        type: 'todo',
                        data: todos,
                    })
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

