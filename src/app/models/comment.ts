export class Comment{


    constructor(
        
       public cmnt:string,
       public ticketId:number,
       public commentId?:number,
       public techId?:number,
       public clientId?:number,
       public epochTime?:number
    ){}
}