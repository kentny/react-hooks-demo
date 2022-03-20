import {Album} from "../entity/Album";
import {Todo} from "../entity/Todo";
import {User} from "../entity/User";
import {HttpAPI} from "../infrastructure/HttpAPI";

export interface DataRepository {
    albums(): Promise<Album[]>
    todos(): Promise<Todo[]>
    users(): Promise<User[]>
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

    users(): Promise<User[]> {
        return this.httpAPI.get("/users").then(obj => {
            return obj as User[]
        })
    }

}
