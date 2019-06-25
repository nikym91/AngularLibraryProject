export interface Author {
    id: number,
    name: string,
    username: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string
    }
}
