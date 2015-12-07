import {CORE_DIRECTIVES,FORM_DIRECTIVES, Component, Input, View, Inject, FormBuilder, Control} from 'angular2/angular2';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {ClassifierLoadService} from "../Services/ClassifierLoadService";
import {ProjectLoadService} from "../Services/ProjectLoadService";
import {Project} from "../Model/Project";
import {Region} from "../Model/Classifiers/Region";
import {District} from "../Model/Classifiers/District";
import {Program} from "../Model/Classifiers/Program";
import {SubProgram} from "../Model/Classifiers/SubProgram";
import {Routes} from '../Configs/Route.Config';
import {regionsMock} from "../Mocks/RegionsMock";
import {districtsMock} from "../Mocks/DistrictsMock";
import {programsMock} from "../Mocks/ProgramsMock";
import {subProgramsMock} from "../Mocks/SubProgramsMock";
import {ContactsComponent} from "./Contacts.Component";


@Component({
    selector: 'sys-project'
})

@View({
    templateUrl: 'templates/projectForm.html',
    styleUrls: ['styles/style.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES, ContactsComponent]
})

@Inject(ProjectLoadService)
export class ProjectForm {

    public model: Project;
    public _projectModel: Project;
    private _regions: Array<Region>;
    private _districts: Array<District>;
    private _programs: Array<Program>;
    private _subPrograms: Array<SubProgram>;

    constructor(private _projectLoader: ProjectLoadService,
                private _classifierLoader: ClassifierLoadService,
                private _routeParams: RouteParams) {

        let id = parseInt(_routeParams.get('id'), 10);
        this._projectModel = this._projectLoader.loadProject(id);
        this.model = this._projectModel;
        this._regions = this._classifierLoader.loadEntities(regionsMock);
        this._districts = this._classifierLoader.loadChildEntities(districtsMock, this._projectModel.region.id);
        this._programs = this._classifierLoader.loadEntities(programsMock);
        this._subPrograms = this._classifierLoader.loadChildEntities(subProgramsMock, this._projectModel.programId);
    }

    public get projectModel(): Project {
        return this._projectModel;
    }

    public get regions(): Array<Region> {
        return this._regions;
        //return  this._classifierLoader.loadEntities(regionsMock);

    }

    public get districts(): Array<District> {
        return this._districts;
    }
    //
    //public onSubmit() {
    //    alert(JSON.stringify(this._projectModel));
    //}

    private _getRegionById(id: number): Region {
        var loadedRegion = this._regions.filter(function(region){
            return region.id === id;
        });
        return loadedRegion[0];
    }

    private _getDistrictById(id: number): District {
        var loadedDistrict = this._districts.filter(function(district){
            return district.id === id;
        });
        return loadedDistrict[0];
    }

    /**
     * This is a setter, which is interpreted as object for regions select ng-model used in the view.
     * Region is a parent of district, so when region is changed, districts list should be updated according to region.
     * Thus, during ng-model update districts list is reloaded.
     * @param id of the selected region
     */
    public set selectedRegionId(id: string) {
        var selectedRegionId: number = parseInt(id, 10);
        this._projectModel.region = this._getRegionById(selectedRegionId);
        this._districts = this._classifierLoader.loadChildEntities(districtsMock, selectedRegionId);
    }

    public get selectedRegionId() {
        return this._projectModel.region.id + "";
    }

    public set selectedDistrictId(id: string) {
        this._projectModel.district = this._getDistrictById(parseInt(id, 10));
    }

    public get selectedDistrictId() {
        return this._projectModel.district.id + "";
    }

    public get programs() : Array<Program> {
        return this._programs;
    }

    public get subPrograms(): Array<SubProgram> {
        //var arr;
        //if(this._projectModel.programId == 1) {
        //    arr = [{id:1, name:"aaa"}, {id:2, name:"bbb"}, {id:3, name:"ccc"}];
        //} else {
        //    arr = [{id:3, name:"1"}, {id:4, name:"2"}, {id:5, name:"3"}];
        //}
        return this._subPrograms;
        //return arr;
    }

    public updateSubProgramList(programId) {
        var selectedProgramId = parseInt(programId, 10);
        this._subPrograms = this._classifierLoader.loadChildEntities(subProgramsMock, selectedProgramId);
    }

    public getModelJson() {
        alert(JSON.stringify(this._projectModel));
    }

}