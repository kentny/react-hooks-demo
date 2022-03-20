
export interface HttpAPI {
    get(path: string): Promise<object>
}

export class HttpAPIInfrastructure implements  HttpAPI {
    private readonly url: string

    constructor(url: string) {
        this.url = url
    }

    get(path: string): Promise<object> {
        return Promise.resolve({});
    }
}
