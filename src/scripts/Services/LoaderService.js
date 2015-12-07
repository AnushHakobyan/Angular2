///<reference path='../../../typings/tsd.d.ts' />
import { Region } from "../Model/Classifiers/Region";
import { District } from "../Model/Classifiers/District";
import { ProjectContact } from "../Model/Functionals/ProjectContact";
import { Project } from "../Model/Project";
import { regionsMock } from "../Mocks/RegionsMock";
import { districtsMock } from "../Mocks/DistrictsMock";
import { contactsMock } from "../Mocks/ContactsMock";
import { projectsMock } from "../Mocks/ProjectsMock";
/**
 * LoadService loads json files.
 * It is a module, as we want to have smth in terms of static class.
 * In typescript this concept is available as a module.
 */
export class LoaderService {
    //public loadRegions(): Promise<Array<Entity>> {
    //    var regions:Array<Entity> = new Array<Entity>();
    //    regionsMock.forEach(function (element) {
    //        regions.push(new Region(element.id, element.name));
    //    });
    //    return Promise.resolve(regions);
    //}
    constructor() {
        this._name = "aaa";
    }
    loadRegions() {
        var regions = new Array();
        regionsMock.forEach(function (element) {
            regions.push(new Region(element.id, element.name));
        });
        return regions;
    }
    loadDistricts(region) {
        var districts = new Array();
        var regionId = region.id;
        var filteredDistricts = districtsMock.filter(function (district) {
            return district.parentId === regionId;
        });
        filteredDistricts.forEach(function (district) {
            districts.push(new District(district.id, district.name, regionId));
        });
        return districts;
    }
    loadProject(id) {
        var requiredProject = projectsMock.filter(function (project) {
            return project.id === id;
        });
        var project = new Project(id);
        var projectRegion = this.loadProjectRegion(requiredProject[0].regionId);
        var projectDistrict = this.loadProjectDistrict(requiredProject[0].districtId, projectRegion);
        project.title = requiredProject[0].title;
        project.code = requiredProject[0].code;
        project.district = projectDistrict;
        project.region = projectRegion;
        project.projectContacts = this.loadProjectContacts(project.id);
        return project;
    }
    loadProjectRegion(regionId) {
        var projectRegion = regionsMock.filter(function (region) {
            return region.id === regionId;
        });
        var region = new Region(projectRegion[0].id, projectRegion[0].name);
        return region;
    }
    loadProjectDistrict(districtId, region) {
        var projectDistrict = districtsMock.filter(function (district) {
            return district.id === districtId;
        });
        var district = new District(projectDistrict[0].id, projectDistrict[0].name, region.id);
        return district;
    }
    loadProjectContacts(projectId) {
        var contacts = new Array();
        var filteredContacts = contactsMock.filter(function (contact) {
            return contact.projectId === projectId;
        });
        filteredContacts.forEach(function (element) {
            contacts.push(new ProjectContact(element.id, projectId, element.name, element.number));
        });
        return contacts;
    }
    get regions() {
        if (!this._regions) {
            this._regions = this.loadRegions();
        }
        return this._regions;
    }
    get name() {
        return this._name;
    }
}
//# sourceMappingURL=LoaderService.js.map