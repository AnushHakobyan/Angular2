import {ChildEntity} from "./ChildEntity";
import {Program} from "./Program";

export class SubProgram extends ChildEntity {
    constructor(id: number, name: string, parentId: number) {
        super(id, name, parentId);
    }
}