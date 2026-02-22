export class User {
    firstName: string;
    lastName: string;
    birthdate: number;
    city: string;
    zip: number;
    street: string;

    constructor(obj: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.birthdate = obj ? obj.birthdate : '';
        this.city = obj ? obj.city : '';
        this.zip = obj ? obj.zip : '';
        this.street = obj ? obj.street : '';
    }
}