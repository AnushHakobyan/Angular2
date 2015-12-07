import {AbstractFunctional} from "./AbstractFunctional";
import {Project} from "../Project";

export class ProjectContact extends AbstractFunctional {
    private _name: string;
    private _phoneNumber: string;

    constructor(id: number, projectId: number, name: string, phoneNumber: string) {
        super(id, projectId);
        this._name = name;
        this._phoneNumber = phoneNumber;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

    public get phoneNumber(): string {
        return this._phoneNumber;
    }

    public set phoneNumber(number: string) {
        this._phoneNumber = number;
    }


}