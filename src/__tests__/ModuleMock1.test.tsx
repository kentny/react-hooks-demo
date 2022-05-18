import React from "react";
import axios from "axios";

import {HttpAPIInfrastructure} from "../infrastructure/HttpAPI";

// Mock a module
jest.mock('axios');

describe('Jest Module Mock', () => {

    test('', () => {
        const users = [{name: 'Bob'}]
        const resp = {data: users}
        axios.get.mockResolvedValue(resp)

        const httpAPIInfrastructure = new HttpAPIInfrastructure("https://example.com/")

        return httpAPIInfrastructure.get("/users").then((data) => {
            expect(data).toEqual([{name: 'Bob'}])
        })
    })
})
