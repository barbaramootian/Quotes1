export class Quote {
    public upvotenumber : number
    constructor (public name:string, public quote:string, public author:string, public date:Date){this.upvotenumber= 0}
}
