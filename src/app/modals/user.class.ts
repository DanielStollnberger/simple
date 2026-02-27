export class User {
    firstName: string;
    lastName: string;
    email: string;
    birthdate: Date;
    city: string;
    zip: number;
    street: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.birthdate = obj ? obj.birthdate : '';
        this.city = obj ? obj.city : '';
        this.zip = obj ? obj.zip : '';
        this.street = obj ? obj.street : '';
    }

    toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthdate: this.birthdate.getTime(),
            city: this.city,
            zip: this.zip,
            street: this.street,
        }
    }
}