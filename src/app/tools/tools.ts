export class Tools {

    static isUndefined(x : any) : boolean {
        return typeof x === 'undefined';
    }

    static generateFackId() : number {
        return Math.floor(Math.random() * Math.floor(1000000000))+1000000001;
    }

    static isGenerateId(x : number) : boolean {
        return x > 1000000000
    }

}
