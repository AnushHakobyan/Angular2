var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CORE_DIRECTIVES, FORM_DIRECTIVES, Component, View, Inject } from 'angular2/angular2';
import { RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';
import { ClassifierLoadService } from "../Services/ClassifierLoadService";
import { ProjectLoadService } from "../Services/ProjectLoadService";
import { regionsMock } from "../Mocks/RegionsMock";
import { districtsMock } from "../Mocks/DistrictsMock";
import { programsMock } from "../Mocks/ProgramsMock";
import { subProgramsMock } from "../Mocks/SubProgramsMock";
import { ContactsComponent } from "./Contacts.Component";
export let ProjectForm = class {
    constructor(_projectLoader, _classifierLoader, _routeParams) {
        this._projectLoader = _projectLoader;
        this._classifierLoader = _classifierLoader;
        this._routeParams = _routeParams;
        let id = parseInt(_routeParams.get('id'), 10);
        this._projectModel = this._projectLoader.loadProject(id);
        this.model = this._projectModel;
        this._regions = this._classifierLoader.loadEntities(regionsMock);
        this._districts = this._classifierLoader.loadChildEntities(districtsMock, this._projectModel.region.id);
        this._programs = this._classifierLoader.loadEntities(programsMock);
        this._subPrograms = this._classifierLoader.loadChildEntities(subProgramsMock, this._projectModel.programId);
    }
    get projectModel() {
        return this._projectModel;
    }
    get regions() {
        return this._regions;
        //return  this._classifierLoader.loadEntities(regionsMock);
    }
    get districts() {
        return this._districts;
    }
    //
    //public onSubmit() {
    //    alert(JSON.stringify(this._projectModel));
    //}
    _getRegionById(id) {
        var loadedRegion = this._regions.filter(function (region) {
            return region.id === id;
        });
        return loadedRegion[0];
    }
    _getDistrictById(id) {
        var loadedDistrict = this._districts.filter(function (district) {
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
    set selectedRegionId(id) {
        var selectedRegionId = parseInt(id, 10);
        this._projectModel.region = this._getRegionById(selectedRegionId);
        this._districts = this._classifierLoader.loadChildEntities(districtsMock, selectedRegionId);
    }
    get selectedRegionId() {
        return this._projectModel.region.id + "";
    }
    set selectedDistrictId(id) {
        this._projectModel.district = this._getDistrictById(parseInt(id, 10));
    }
    get selectedDistrictId() {
        return this._projectModel.district.id + "";
    }
    get programs() {
        return this._programs;
    }
    get subPrograms() {
        //var arr;
        //if(this._projectModel.programId == 1) {
        //    arr = [{id:1, name:"aaa"}, {id:2, name:"bbb"}, {id:3, name:"ccc"}];
        //} else {
        //    arr = [{id:3, name:"1"}, {id:4, name:"2"}, {id:5, name:"3"}];
        //}
        return this._subPrograms;
        //return arr;
    }
    updateSubProgramList(programId) {
        var selectedProgramId = parseInt(programId, 10);
        this._subPrograms = this._classifierLoader.loadChildEntities(subProgramsMock, selectedProgramId);
    }
    getModelJson() {
        alert(JSON.stringify(this._projectModel));
    }
};
ProjectForm = __decorate([
    Component({
        selector: 'sys-project'
    }),
    View({
        templateUrl: 'templates/projectForm.html',
        styleUrls: ['styles/style.css'],
        directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES, ContactsComponent]
    }),
    Inject(ProjectLoadService), 
    __metadata('design:paramtypes', [ProjectLoadService, ClassifierLoadService, RouteParams])
], ProjectForm);
//# sourceMappingURL=ProjectForm.Component.js.map