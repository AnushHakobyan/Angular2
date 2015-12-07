///<reference path='../../../typings/tsd.d.ts' />

import {Entity} from "./../Model/Classifiers/Entity";
import {ChildEntity} from "./../Model/Classifiers/ChildEntity";
import {Region} from "../Model/Classifiers/Region";
import {District} from "../Model/Classifiers/District";
import {ProjectContact} from "../Model/Functionals/ProjectContact";
import {Project} from "../Model/Project";
import {regionsMock} from "../Mocks/RegionsMock";
import {districtsMock} from "../Mocks/DistrictsMock";
import {contactsMock} from "../Mocks/ContactsMock";
import {projectsMock} from "../Mocks/ProjectsMock"

/**
 * LoadService loads json files.
 * It is a module, as we want to have smth in terms of static class.
 * In typescript this concept is available as a module.
 */
export class LoaderService {
    private _regions: Array<Region>;

    private _name: string = "aaa"
    //public loadRegions(): Promise<Array<Entity>> {
    //    var regions:Array<Entity> = new Array<Entity>();
    //    regionsMock.forEach(function (element) {
    //        regions.push(new Region(element.id, element.name));
    //    });
    //    return Promise.resolve(regions);
    //}

    constructor() {
    }

    public loadRegions(): Array<Region> {
        var regions: Array<Region> = new Array();
        regionsMock.forEach(function (element) {
            regions.push(new Region(element.id, element.name));
        });
        return regions;
    }

    public loadDistricts(region: Region): Array<District> {
        var districts: Array<District> = new Array();
        var regionId = region.id;
        var filteredDistricts = districtsMock.filter(function(district){
            return district.parentId === regionId;
        });
        filteredDistricts.forEach(function(district) {
            districts.push(new District(district.id, district.name, regionId));
        });
        return districts;
    }

    public loadProject(id: number): Project {
        var requiredProject = projectsMock.filter(function(project) {
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

    public loadProjectRegion(regionId: number): Region {
        var projectRegion = regionsMock.filter(function(region){
            return region.id === regionId;
        });
        var region: Region = new Region(projectRegion[0].id, projectRegion[0].name);
        return region;
    }


    public loadProjectDistrict(districtId: number, region: Region): District {
        var projectDistrict = districtsMock.filter(function(district){
            return district.id === districtId;
        });
        var district: District = new District(projectDistrict[0].id, projectDistrict[0].name, region.id);
        return district;
    }

    public loadProjectContacts(projectId: number): Array<ProjectContact> {
        var contacts: Array<ProjectContact> = new Array();
        var filteredContacts = contactsMock.filter(function(contact){
            return contact.projectId === projectId;
        });
        filteredContacts.forEach(function (element) {
            contacts.push(new ProjectContact(element.id, projectId, element.name, element.number));
        });
        return contacts;
    }

    public get regions(): Array<Region> {
        if(!this._regions) {
            this._regions = this.loadRegions();
        }
        return this._regions;
    }

    public get name(): string {
        return this._name;
    }


}
