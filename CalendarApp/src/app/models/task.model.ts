export class Task {
    constructor(
        public id : number,
        public name : string,
        public description : string,
        public initialDate : Date,
        public endingDate : Date,
        public asignature : string,
        public personAsignated : string,
        public timeEstimated : number,
        public realTime : number | undefined
    ){}
}