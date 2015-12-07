export class Project {
    constructor(id) {
        this.test = 1;
        this._id = id;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get region() {
        return this._region;
    }
    set region(region) {
        this._region = region;
    }
    get district() {
        return this._district;
    }
    set district(district) {
        this._district = district;
    }
    get code() {
        return this._code;
    }
    set code(code) {
        this._code = code;
    }
    get projectContacts() {
        return this._projectContacts;
    }
    set projectContacts(projectContacts) {
        this._projectContacts = projectContacts;
    }
    get programId() {
        return this._programId;
    }
    set programId(programId) {
        this._programId = programId;
    }
    get subProgramId() {
        return this._subProgramId;
    }
    set subProgramId(subProgramId) {
        this._subProgramId = subProgramId;
    }
}
//# sourceMappingURL=Project.js.map