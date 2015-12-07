import {Entity} from "./Entity";

//export interface ChildEntity extends Entity{
//    //getParentId() : number;
//}

export class  ChildEntity extends Entity {

    private _parentId: number;

    constructor(id: number, name: string, parentId: number){
        super(id, name);
        this._parentId = parentId;
    }

    public get parentId() : number {
        return this._parentId;
    }

    public set parentId(parentId: number) {
        this._parentId = parentId;
    }

    //public getParentId(): number {
    //    return this._parentId;
    //}

}