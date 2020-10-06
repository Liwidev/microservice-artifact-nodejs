/**
 * @typedef Response
 * @property {[integer]} code
 */

export class Response {
    code:number;
    constructor(code:number){
        this.code = code;
    }
}