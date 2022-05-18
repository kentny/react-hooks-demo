import React from "react";
import {baz} from './MyModule';

// Mock a module
jest.mock('./MyModule', () => {
    const myModule = jest.requireActual("./MyModule")

    return {
        ...myModule,
        baz: () => 'Dummy',     // Override only `baz`
    }
})

describe('Jest Module Mock', () => {

    test('', () => {
        expect(baz()).toBe("Dummy")
    })
})
