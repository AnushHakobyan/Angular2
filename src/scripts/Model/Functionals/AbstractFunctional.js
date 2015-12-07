export class AbstractFunctional {
    constructor(id, parentId) {
        this._parentId = parentId;
        this._id = id;
    }
    get parent() {
        return this._parentId;
    }
    get id() {
        return this._id;
    }
}
//# sourceMappingURL=AbstractFunctional.js.map