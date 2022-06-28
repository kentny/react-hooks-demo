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
    const [selectedValue, setSelectedValue] = useState<string>("albums")

    // TODO: Not Implemented Yet
    return <>
        <h2>
            DUMMY TITLE
        </h2>
        <form onSubmit={(e) => {
            e.preventDefault()
        }} >
            <label>
                <input type="radio" name="radio-buttons" value="albums" onChange={() => {
                    setSelectedValue("albums")
                }} defaultChecked/>
                XXX
            </label>
            <label>
                <input type="radio" name="radio-buttons" value="todos" onChange={() => {
                    setSelectedValue("todos")
                }}/>
                YYY
            </label>
            <button type='submit' onClick={() => {
            }}>GET
            </button>
        </form>
    </>
}

