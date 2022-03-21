import {Album} from "../entity/Album";
import {Todo} from "../entity/Todo";
import {HttpAPI} from "../infrastructure/HttpAPI";

export interface DataRepository {
    albums(): Promise<Album[]>
    todos(): Promise<Todo[]>
}

export class HttpAPIDataRepository implements DataRepository {
    private readonly httpAPI: HttpAPI

    constructor(httpAPI: HttpAPI) {
        this.httpAPI = httpAPI
    }

    albums(): Promise<Album[]> {
        return this.httpAPI.get("/albums").then(obj => {
            return obj as Album[]
        })
    }

    todos(): Promise<Todo[]> {
        return this.httpAPI.get("/todos").then(obj => {
            return obj as Todo[]
        })
    }
}
