// @ts-ignore
import {HttpAPI} from "../infrastructure/HttpAPI";
import {HttpAPIDataRepository} from "./DataRepository";
import {Album} from "../entity/Album";
import {Todo} from "../entity/Todo";

describe('Check DataRepository.', () => {
    let spyHttpAPI: SpyHttpAPI
    let httpAPIDataRepository: HttpAPIDataRepository

    beforeEach(() => {
        spyHttpAPI = new SpyHttpAPI()
        httpAPIDataRepository = new HttpAPIDataRepository(spyHttpAPI)
    })

    test('Call proper http api endpoint.', () => {
        httpAPIDataRepository.albums()
        expect(spyHttpAPI.inputValue_getPath).toEqual("/albums")

        httpAPIDataRepository.todos()
        expect(spyHttpAPI.inputValue_getPath).toEqual("/todos")
    })

    test('Receive and pass proper data', async () => {
        const expectedAlbums: Album[] = [
            {id: "A", title: "ABC"},
            {id: "B", title: "123"},
        ]
        spyHttpAPI.returnValue_get = expectedAlbums
        const actualAlbums = await httpAPIDataRepository.albums()
        expect(actualAlbums).toEqual(expectedAlbums)

        const expectedTodos: Todo[] = [
            {id: "A", title: "ABC", completed: true},
            {id: "B", title: "123", completed: false},
        ]
        spyHttpAPI.returnValue_get = expectedTodos
        const actualTodos = await httpAPIDataRepository.todos()
        expect(actualTodos).toEqual(expectedTodos)
    })
})

class SpyHttpAPI implements HttpAPI {
    inputValue_getPath: string = ""
    returnValue_get: object = {}

    get(path: string): Promise<object> {
        this.inputValue_getPath = path
        return Promise.resolve(this.returnValue_get);
    }
}
