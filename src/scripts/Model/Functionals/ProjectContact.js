import { AbstractFunctional } from "./AbstractFunctional";
export class ProjectContact extends AbstractFunctional {
    constructor(id, projectId, name, phoneNumber) {
        super(id, projectId);
        this._name = name;
        this._phoneNumber = phoneNumber;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(number) {
        this._phoneNumber = number;
    }
}
//# sourceMappingURL=ProjectContact.js.map