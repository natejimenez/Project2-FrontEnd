import { Priority } from "../components/enums/priority"
export class Ticket{

    constructor(
        public ticketId: number,
        public description:string,
        public priority:Priority,
        public epochStart:number,
        public epochEnd:number,
        public comments:string[],
        public clientId:number
    ){}
}