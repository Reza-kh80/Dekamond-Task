export interface User {
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        street: {
            number: number;
            name: string;
        };
        city: string;
        state: string;
        country: string;
        postcode: number;
    };
    email: string;
    login: {
        username: string;
    };
    dob: {
        age: number;
    };
    phone: string;
    picture: {
        large: string;
    };
}
