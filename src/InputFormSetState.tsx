import React from "react";
import {InputFormProps} from "./InputFormHooks";

type InputFormState = {
    selectedValue: string
}

export class InputFormSetState extends React.Component<InputFormProps, InputFormState> {
    constructor(props: InputFormProps) {
        super(props);
        this.state = {
            selectedValue: "albums",
        }
    }

    getData() {
        switch (this.state.selectedValue) {
            case
            "albums":
                this.props.repo.albums().then(albums => {
                    this.props.onReceiveData(albums)
                })
                break
            case
            "todos":
                this.props.repo.todos().then(todos => {
                    this.props.onReceiveData(todos)
                })
                break
            default:
                break
        }
    }

    render() {
        return <>
            <h2>
                {this.props.title}
            </h2>
            <form onSubmit={(e) => {
                e.preventDefault()
            }}>
                <label>
                    <input type="radio" name="radio-buttons" value="albums" onChange={() => {
                        this.setState({selectedValue: "albums",})
                    }} defaultChecked/>
                    ALBUMS
                </label>
                <label>
                    <input type="radio" name="radio-buttons" value="todos" onChange={() => {
                        this.setState({selectedValue: "todos",})
                    }}/>
                    TODOS
                </label>
                <button type='submit' onClick={() => {
                    this.getData()
                }}>GET
                </button>
            </form>
        </>
    }
}
