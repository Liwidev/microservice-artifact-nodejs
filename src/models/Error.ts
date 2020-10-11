/**
 * @typedef Error
 * @property {string} code.required
<<<<<<< HEAD
=======
 * @property {string} description
 * @property {string} timestamp.required
>>>>>>> origin/master
 */

export class Error {
    code:string;
<<<<<<< HEAD
    constructor(code:string){
        this.code = code;
=======
    description:string;
    timestamp:number;
    constructor(code:string,description:string,timestamp:number){
        this.code = code;
        this.description = description;
        this.timestamp = timestamp;
>>>>>>> origin/master
    }
}