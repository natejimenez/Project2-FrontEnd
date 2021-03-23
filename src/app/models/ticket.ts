export class Ticket{

    constructor(
        public ticketId: number,
        public description:string,
        public priority:number,
        public epochStart:number,
        public epochEnd:number,
        public comments:string[],
        public clientId:number
    ){}
}