export abstract class AbstractFunctional {
    private _id: number;
    private _parentId: number;

    constructor(id: number, parentId: number ) {
        this._parentId = parentId;
        this._id = id;
    }

    get parent(): number {
        return this._parentId;
    }

    get id(): number {
        return this._id;
    }
}
