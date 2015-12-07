//export interface  Entity {
//
//    //getId(): number;
//    //
//    //getName(): string;
//
//}
export class Entity {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
//# sourceMappingURL=Entity.js.map