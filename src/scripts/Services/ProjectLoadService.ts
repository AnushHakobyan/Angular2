import {Project} from "../Model/Project";
import {Region} from "../Model/Classifiers/Region";
import {District} from "../Model/Classifiers/District";
import {ProjectContact} from "../Model/Functionals/ProjectContact";
import {regionsMock} from "../Mocks/RegionsMock";
import {districtsMock} from "../Mocks/DistrictsMock";
import {contactsMock} from "../Mocks/ContactsMock";
import {projectsMock} from "../Mocks/ProjectsMock"
import {AbstractFunctional} from "../Model/Functionals/AbstractFunctional";
import {Entity} from "../Model/Classifiers/Entity";
import {ChildEntity} from "../Model/Classifiers/ChildEntity";

export class ProjectLoadService {

    public cachedProjects: Array<Project>;

    public loadProject(id: number): Project {
        //considered that project id is unique
        var requiredProject = this.cachedProjects.filter(function(project) {
            return project.id === id;
        });
        var project = requiredProject[0];
        return project;
    }

    private _loadProjects(): Array<Project> {
        var t:any = this;
        var projects: Array<Project> = new Array<Project>();
        projectsMock.forEach( function(projectItem) {
            var project = t._createProject(projectItem);
            projects.push(project);
        });
        return projects;
    }

    public getAllProjects(): Array<Project> {
        if(this.cachedProjects == null) {
            this.cachedProjects = this._loadProjects();
        }
        return this.cachedProjects;
    }

    private _createProject(projectItem): Project {
        var project = new Project(projectItem.id);
        var projectRegion = this._loadProjectFunctional(regionsMock, projectItem.regionId);
        var projectDistrict = this._loadProjectSubFunctional(districtsMock, projectItem.districtId);
        project.title = projectItem.title;
        project.district = projectDistrict;
        project.region = projectRegion;
        project.programId = projectItem.programId;
        project.subProgramId = projectItem.subProgramId;
        project.code = projectItem.code;
        project.projectContacts = this._loadProjectContacts(projectItem.id);
        return project;
    }

    //private loadProjectRegion(regionId: number): Region {
    //    var projectRegion = regionsMock.filter(function(region){
    //        return region.id === regionId;
    //    });
    //    var region: Region = new Region(projectRegion[0].id, projectRegion[0].name);
    //    return region;
    //}

    private _loadProjectFunctional(functionalsMock, functionalId: number): Entity {
        var projectFunctionalMock = functionalsMock.filter(function(functional) {
            return functional.id === functionalId;
        });
        var projectFunctional: Entity = new Entity(projectFunctionalMock[0].id, projectFunctionalMock[0].name);
        return projectFunctional;
    }

    private _loadProjectSubFunctional(subFunctionalsMock, subFunctionalId): ChildEntity {
        var projectSubFunctionalMock = subFunctionalsMock.filter(function(subFunctional) {
            return subFunctional.id === subFunctionalId;
        });
        var projectSubFunctional: ChildEntity = new ChildEntity(projectSubFunctionalMock[0].id, projectSubFunctionalMock[0].name, projectSubFunctionalMock[0].parentId);
        return projectSubFunctional;
    }


    //private loadProjectDistrict(districtId: number, regionId: number): District {
    //    var projectDistrict = districtsMock.filter(function(district){
    //        return district.id === districtId;
    //    });
    //    var district: District = new District(projectDistrict[0].id, projectDistrict[0].name, regionId);
    //    return district;
    //}

    private _loadProjectContacts(projectId: number): Array<ProjectContact> {
        var contacts: Array<ProjectContact> = new Array();
        var filteredContacts = contactsMock.filter(function(contact){
            return contact.projectId === projectId;
        });
        filteredContacts.forEach(function (element) {
            contacts.push(new ProjectContact(element.id, projectId, element.name, element.number));
        });
        return contacts;
    }

    //private loadFunctionals(projectId: number, functionalsMock): Array<AbstractFunctional> {
    //    var projectFunctionals: Array<AbstractFunctional> = new Array();
    //    var filteredFunctionals = functionalsMock.filter(function(functional){
    //        return functional.projectId = projectId;
    //    });
    //    filteredFunctionals.forEach(function(projectFunctional) {
    //        projectFunctionals.push(new );
    //    });
    //}


}