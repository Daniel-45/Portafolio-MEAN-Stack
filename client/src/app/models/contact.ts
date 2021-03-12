export class Contact {
    constructor(
        // tslint:disable-next-line: variable-name
        public _id: string,
        public name: string,
        public surnames: string,
        public dateOfBirth: Date,
        public phone: string,
        public email: string,
        public address: string,
        public postCode: string,
        public message: string
    ) { }
}
