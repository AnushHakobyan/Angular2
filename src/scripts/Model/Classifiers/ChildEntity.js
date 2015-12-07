import { Entity } from "./Entity";
//export interface ChildEntity extends Entity{
//    //getParentId() : number;
//}
export class ChildEntity extends Entity {
    constructor(id, name, parentId) {
        super(id, name);
        this._parentId = parentId;
    }
    get parentId() {
        return this._parentId;
    }
    set parentId(parentId) {
        this._parentId = parentId;
    }
}
//# sourceMappingURL=ChildEntity.js.map