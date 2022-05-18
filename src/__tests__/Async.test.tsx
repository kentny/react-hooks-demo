import React from "react";

const fetchData = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        resolve("Hello Data")
    })
}

describe('Jest Async', () => {
    test('1: Return a promise', () => {
        // Jest will wait for that promise to resolve when return a promise.
        return fetchData().then(data => {
            expect(data).toBe("Hello Data")
        })
    })

    test('2: Await for the response', async () => {
        const data = await fetchData()
        expect(data).toBe("Hello Data")
    })

    test('3: Check the result of resolve', async () => {
        await expect(fetchData()).resolves.toBe("Hello Data")
    })

    test('3: Use `done`', (done) => {
        fetchData().then(data => {
            expect(data).toBe("Hello Data")

            // Wait until `done()`is called.
            done()
        })
    })
})
