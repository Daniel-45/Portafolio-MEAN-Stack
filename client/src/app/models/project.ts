export class Project {
    constructor(
        // tslint:disable-next-line: variable-name
        public _id: string,
        public name: string,
        public description: string,
        public category: string,
        public languages: string,
        public technologies: string,
        public year: number,
        public image: string
    ) { }
}
