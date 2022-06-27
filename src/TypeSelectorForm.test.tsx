import {fireEvent, render} from "@testing-library/react";
import {TypeSelectorForm} from "./TypeSelectorForm";
import React from "react";
import {DataRepository} from "./repository/DataRepository";
import {Todo} from "./entity/Todo";
import {Album} from "./entity/Album";

describe('Check input form.', () => {
    let spyDataRepository: SpyDataRepository

    beforeEach(() => {
        spyDataRepository = new SpyDataRepository()
    })

    test('There are 2 radio buttons and 1 get button in input form.', () => {
        const view = render(<TypeSelectorForm title="DUMMY TITLE" repo={spyDataRepository} onReceiveData={() => {}} />)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const radioForAlbums = view.getByLabelText('ALBUMS') as HTMLInputElement
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const radioForTodos = view.getByLabelText('TODOS') as HTMLInputElement

        expect(radioForAlbums.type).toEqual('radio')
        expect(radioForTodos.type).toEqual('radio')


        // eslint-disable-next-line testing-library/prefer-screen-queries
        const getButton = view.getByRole('button', {name: /get/i})
        expect(getButton).toBeInTheDocument()
    })

    test('Call get albums api.', () => {
        const view = render(<TypeSelectorForm title="DUMMY TITLE" repo={spyDataRepository} onReceiveData={() => {}} />)
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const radioForAlbums = view.getByLabelText('ALBUMS') as HTMLInputElement
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const radioForTodos = view.getByLabelText('TODOS') as HTMLInputElement
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const getButton = view.getByRole('button', {name: /get/i})

        // ALBUMS
        fireEvent.click(radioForAlbums)
        fireEvent.click(getButton)
        expect(spyDataRepository.callCount_albums).toBe(1)

        // TODOS
        fireEvent.click(radioForTodos)
        fireEvent.click(getButton)
        expect(spyDataRepository.callCount_todos).toBe(1)
    })

    test('Receive expected data through onReceiveData.', (done) => {
        const expectedTodos: Todo[] = [
            {kind: "todo", userId: "1", id: "A", title: "ABC", completed: true},
            {kind: "todo", userId: "1", id: "B", title: "123", completed: false},
        ]
        const view = render(<TypeSelectorForm title="DUMMY TITLE" repo={spyDataRepository} onReceiveData={(data => {
            try {
                expect(expectedTodos).toEqual(data)
                done()
            } catch (e) {
                done(e)
            }
        })} />)

        // eslint-disable-next-line testing-library/prefer-screen-queries
        const radioForTodos = view.getByLabelText('TODOS') as HTMLInputElement

        // eslint-disable-next-line testing-library/prefer-screen-queries
        const getButton = view.getByRole('button', {name: /get/i})

        spyDataRepository.returnValue_todos = expectedTodos
        fireEvent.click(radioForTodos)
        fireEvent.click(getButton)
    })
})

class SpyDataRepository implements DataRepository {
    callCount_albums = 0
    callCount_todos = 0

    returnValue_albums: Album[] = []
    returnValue_todos: Todo[] = []

    albums(): Promise<Album[]> {
        this.callCount_albums++
        return Promise.resolve(this.returnValue_albums);
    }

    todos(): Promise<Todo[]> {
        this.callCount_todos++
        return Promise.resolve(this.returnValue_todos);
    }
}
