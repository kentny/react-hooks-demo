import React from "react";

describe('Jest Matcher', () => {
    describe('General Matchers', () => {
        test('`toBe()`: Exact equality', () => {
            // Primitive Types
            expect(2 + 2).toBe(4)
            expect('hello').toBe('hello')

            // Objects Comparison
            const myObj = {name: 'ken'}
            expect(myObj).not.toBe(myObj)

            expect({foo: 'FOO'}).not.toBe({foo: 'FOO'})
        })

        test('`toEqual()`: Check the value of an object', () => {
            expect({foo: 'FOO'}).toEqual({foo: 'FOO'})
        })


        test('`toMatch()`')
    })
})
