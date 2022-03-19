import React from "react";

type InputFormProps = {
    title: string,
    onChange: () => void,
}

export function InputForm(props: InputFormProps) {
    const {title, onChange} = props

    return <>
        <h2>
            {title}
        </h2>
        <form id="use-setstate-form">
            <label>
                <input type="radio" name="radio-buttons" value="albums" checked onChange={props.onChange}/>
                ALBUMS
            </label>
            <label>
                <input type="radio" name="radio-buttons" value="todos" onChange={props.onChange}/>
                TODOS
            </label>
            <label>
                <input type="radio" name="radio-buttons" value="users" onChange={props.onChange}/>
                USERS
            </label>
            <button>GET</button>
        </form>
    </>;
}

