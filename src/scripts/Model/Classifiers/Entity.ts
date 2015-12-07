//export interface  Entity {
//
//    //getId(): number;
//    //
//    //getName(): string;
//
//}

export class Entity  {
    public _id: number;
    public _name: string;

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    //public getId():number {
    //    return this.id;
    //}
    //
    //public getName(): string {
    //    return this.name;
    //}
}

