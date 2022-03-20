import {Album} from "../entity/Album";
import {Todo} from "../entity/Todo";
import {User} from "../entity/User";

export interface DataRepository {
    albums(): Promise<Album[]>
    todos(): Promise<Todo[]>
    users(): Promise<User[]>
}

export default class HttpAPIDataRepository implements DataRepository {
    albums(): Promise<Album[]> {
        return Promise.resolve([]);
    }

    todos(): Promise<Todo[]> {
        return Promise.resolve([]);
    }

    users(): Promise<User[]> {
        return Promise.resolve([]);
    }

}
