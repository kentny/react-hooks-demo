import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

describe('React Hook Demo Tests', () => {
    describe('General Check', () => {
        test('Title is included.', () => {
            render(<App />)
            const hookTitleElement = screen.getByText(/use hooks/i)
            expect(hookTitleElement).toBeInTheDocument()

            // const setStateTitleElement = screen.getByText(/use setstate/i)
            // expect(setStateTitleElement).toBeInTheDocument()
        })
    })
})
