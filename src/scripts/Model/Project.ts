import {District} from "./Classifiers/District";
import {ProjectContact} from "./Functionals/ProjectContact";
import {Region} from "./Classifiers/Region";

export class Project {

    public test = 1;

    private _id: number;

    private _title: string;

    private _region: Region;

    private _district: District;

    private _code: string;

    private _projectContacts: Array<ProjectContact>;

    private _programId: number;

    private _subProgramId: number;

    constructor(id: number) {
        this._id = id;
    }

    public get id(): number {
        return this._id;
    }

    public get title(): string {
        return this._title;
    }

    public set title(title: string){
        this._title = title;
    }

    public get region(): Region {
        return this._region;
    }

    public set region(region: Region){
        this._region = region;
    }

    public get district(): District {
        return this._district;
    }

    public set district(district: District) {
        this._district = district;
    }

    public get code(): string {
        return this._code;
    }

    public set code(code: string) {
        this._code = code;
    }

    public get projectContacts(): Array<ProjectContact> {
        return this._projectContacts;
    }

    public set projectContacts(projectContacts: Array<ProjectContact>) {
        this._projectContacts = projectContacts;
    }

    public get programId(): number {
        return this._programId;
    }

    public set programId(programId: number) {
        this._programId = programId;
    }

    public get subProgramId(): number {
        return this._subProgramId;
    }

    public set subProgramId(subProgramId: number) {
        this._subProgramId = subProgramId;
    }



}