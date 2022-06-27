import axios from "axios";

export interface HttpAPI {
    get<T>(path: string): Promise<T>
}

export class HttpAPIInfrastructure implements  HttpAPI {
    private readonly url: string

    constructor(url: string) {
        this.url = url
    }

    get<T>(path: string): Promise<T> {
        return axios.get<T>(this.url + path).then(response => {
            return response.data
        })
    }
}
