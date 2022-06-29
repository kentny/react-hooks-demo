import {fireEvent, render} from "@testing-library/react";
import {DataChunk, TypeSelectorForm} from "./TypeSelectorForm";
import React from "react";
import {DataRepository} from "./repository/DataRepository";
import {Todo} from "./entity/Todo";
import {Album} from "./entity/Album";

class SpyDataRepository implements DataRepository {
}

describe('Check input form.', () => {

    beforeEach(() => {
    })

    test('There is a title in input form.', () => {
    })

    test('There are a radio button with an ALBUM label.', () => {
    })

    test('There are a radio button with a TODO label.', () => {
    })

    test('There are a button with a GET label.', () => {
    })

    test('Call get albums api.', () => {
    })

    test('Call get todos api.', () => {
    })

    test('Receive expected data through onReceiveData.', (done) => {
    })
})
