import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {InputForm} from "./InputForm";

describe('React Hook Demo Tests', () => {
    describe('General Check', () => {
        test('Title is included.', () => {
            render(<App />)
            const hookTitleElement = screen.getByText(/use hooks/i)
            expect(hookTitleElement).toBeInTheDocument()

            const setStateTitleElement = screen.getByText(/use setstate/i)
            expect(setStateTitleElement).toBeInTheDocument()
        })
    })

    describe('Check input form.', () => {
        test('There are 3 radio buttons and 1 get button in input form.', () => {
            const view = render(<InputForm title="DUMMY TITLE" onChange={() => {}} />)
            // eslint-disable-next-line testing-library/prefer-screen-queries
            const radio1 = view.getByLabelText('ALBUMS') as HTMLInputElement
            // eslint-disable-next-line testing-library/prefer-screen-queries
            const radio2 = view.getByLabelText('TODOS') as HTMLInputElement
            // eslint-disable-next-line testing-library/prefer-screen-queries
            const radio3 = view.getByLabelText('USERS') as HTMLInputElement

            expect(radio1.type).toEqual('radio')
            expect(radio2.type).toEqual('radio')
            expect(radio3.type).toEqual('radio')


            // eslint-disable-next-line testing-library/prefer-screen-queries
            const button1 = view.getByRole('button', {name: /get/i})
            expect(button1).toBeInTheDocument()
        })
    })

})
