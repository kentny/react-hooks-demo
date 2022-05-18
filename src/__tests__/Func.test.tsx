import React from "react";

function myForEach<T>(items: T[], callback: ((arg: T) => void)) {
    for (let i = 0; i < items.length; i++) {
        callback(items[i])
    }
}

function myInstantiateTwice(obj: any) {
    new obj()
    new obj()
}

describe('Jest Func', () => {

    describe('myForEach test', () => {
        let spyFn: jest.Mock<any, any>


        beforeEach(() => {
            spyFn = jest.fn()

            myForEach([1, 2, 3], spyFn)
        })


        test('Spy `myForEach` by using jest.fn()', () => {
            expect(spyFn.mock.calls.length).toBe(3)

            // Check the first arg of the first call
            expect(spyFn.mock.calls[0][0]).toBe(1)

            // Check the first arg of the second call
            expect(spyFn.mock.calls[1][0]).toBe(2)

            // Check the first arg of the third call
            expect(spyFn.mock.calls[2][0]).toBe(3)
        })
    })


    describe('`this` test', () => {
        test('Check `this`', () => {
            const spyFn = jest.fn()
            const myObj = {name: "kentaro"}

            // Create the bind function with specific `this`.
            const bind = spyFn.bind(myObj)
            bind()

            expect(spyFn.mock.instances[0]).toEqual({name: "kentaro"})
        })

        test('Instantiation test', () => {
            const spyFn = jest.fn()
            myInstantiateTwice(spyFn)

            // Check the argument of `myInstantiateTwice()` is instantiated twice.
            expect(spyFn.mock.instances.length).toBe(2)
        })
    })


    describe('Stub', () => {
        const stubFn = jest.fn()

        expect(stubFn()).toBeUndefined()

        // Stub return values
        stubFn.mockReturnValueOnce(5).mockReturnValueOnce('Hello').mockReturnValueOnce(true)


        expect(stubFn()).toBe(5)
        expect(stubFn()).toBe('Hello')
        expect(stubFn()).toBe(true)
    })
})
