/**
 * @typedef Error
 * @property {string} code.required
 * @property {string} description
 * @property {string} timestamp.required
 */

export class Error {
    code:string;
    description:string;
    timestamp:number;
    constructor(code:string,description:string,timestamp:number){
        this.code = code;
        this.description = description;
        this.timestamp = timestamp;
    }
}