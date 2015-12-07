import {ChildEntity} from "./ChildEntity";

export class District extends ChildEntity {

    constructor(districtId: number, districtName: string, parentId: number) {
        super(districtId, districtName, parentId);
    }

}