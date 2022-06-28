import {Album} from "../entity/Album";
import {Todo} from "../entity/Todo";
import {HttpAPI} from "../infrastructure/HttpAPI";

export interface DataRepository {
}

export class HttpAPIDataRepository implements DataRepository {
    private readonly httpAPI: HttpAPI

    constructor(httpAPI: HttpAPI) {
        this.httpAPI = httpAPI
    }

    // TODO: Not Implemented Yet
}
