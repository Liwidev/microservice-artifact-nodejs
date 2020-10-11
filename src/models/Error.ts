/**
 * @typedef Error
 * @property {string} code.required
 */

export class Error {
    code:string;
    constructor(code:string){
        this.code = code;
    }
}