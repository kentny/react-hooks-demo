import {fireEvent, render} from "@testing-library/react";
import {DataChunk, TypeSelectorForm} from "./TypeSelectorForm";
import React from "react";
import {DataRepository} from "./repository/DataRepository";
import {Todo} from "./entity/Todo";
import {Album} from "./entity/Album";


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

describe('Check input form.', () => {
    let spyDataRepository: SpyDataRepository

    beforeEach(() => {
        spyDataRepository = new SpyDataRepository()
    })

    test('There is a title in input form.', () => {
        const view = render(<TypeSelectorForm title="DUMMY TITLE" repo={spyDataRepository} onReceiveData={() => {
        }}/>)

        const element = view.getByText(/dummy title/i)

        expect(element).toBeInTheDocument()
    })

    test('There are 2 radio buttons and 1 get button in input form.', () => {
        const view = render(<TypeSelectorForm title="DUMMY TITLE" repo={spyDataRepository} onReceiveData={() => {
        }}/>)
        const radioForAlbums = view.getByLabelText('ALBUMS') as HTMLInputElement
        const radioForTodos = view.getByLabelText('TODOS') as HTMLInputElement

        expect(radioForAlbums.type).toEqual('radio')
        expect(radioForTodos.type).toEqual('radio')


        const getButton = view.getByRole('button', {name: /get/i})
        expect(getButton).toBeInTheDocument()
    })

    test('Call get albums api.', () => {
        const view = render(<TypeSelectorForm title="DUMMY TITLE" repo={spyDataRepository} onReceiveData={() => {
        }}/>)
        const radioForAlbums = view.getByLabelText('ALBUMS') as HTMLInputElement
        const getButton = view.getByRole('button', {name: /get/i})

        fireEvent.click(radioForAlbums)
        fireEvent.click(getButton)
        expect(spyDataRepository.callCount_albums).toBe(1)
    })

    test('Call get todos api.', () => {
        const view = render(<TypeSelectorForm title="DUMMY TITLE" repo={spyDataRepository} onReceiveData={() => {
        }}/>)
        const radioForTodos = view.getByLabelText('TODOS') as HTMLInputElement
        const getButton = view.getByRole('button', {name: /get/i})

        fireEvent.click(radioForTodos)
        fireEvent.click(getButton)
        expect(spyDataRepository.callCount_todos).toBe(1)
    })

    test('Receive expected data through onReceiveData.', (done) => {
        const expectedDataChunk: DataChunk = {
            type: "todo",
            data: [
                {userId: "1", id: "A", title: "ABC", completed: true},
                {userId: "1", id: "B", title: "123", completed: false},
            ],
        }
        const view = render(<TypeSelectorForm title="DUMMY TITLE" repo={spyDataRepository} onReceiveData={(data => {
            try {
                expect(data).toEqual(expectedDataChunk)
                done()
            } catch (e) {
                done(e)
            }
        })}/>)

        const radioForTodos = view.getByLabelText('TODOS') as HTMLInputElement

        const getButton = view.getByRole('button', {name: /get/i})

        spyDataRepository.returnValue_todos = expectedDataChunk.data as Todo[]
        fireEvent.click(radioForTodos)
        fireEvent.click(getButton)
    })
})
