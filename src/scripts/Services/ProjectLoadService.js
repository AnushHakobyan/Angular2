import { Project } from "../Model/Project";
import { ProjectContact } from "../Model/Functionals/ProjectContact";
import { regionsMock } from "../Mocks/RegionsMock";
import { districtsMock } from "../Mocks/DistrictsMock";
import { contactsMock } from "../Mocks/ContactsMock";
import { projectsMock } from "../Mocks/ProjectsMock";
import { Entity } from "../Model/Classifiers/Entity";
import { ChildEntity } from "../Model/Classifiers/ChildEntity";
export class ProjectLoadService {
    loadProject(id) {
        //considered that project id is unique
        var requiredProject = this.cachedProjects.filter(function (project) {
            return project.id === id;
        });
        var project = requiredProject[0];
        return project;
    }
    _loadProjects() {
        var t = this;
        var projects = new Array();
        projectsMock.forEach(function (projectItem) {
            var project = t._createProject(projectItem);
            projects.push(project);
        });
        return projects;
    }
    getAllProjects() {
        if (this.cachedProjects == null) {
            this.cachedProjects = this._loadProjects();
        }
        return this.cachedProjects;
    }
    _createProject(projectItem) {
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
    _loadProjectFunctional(functionalsMock, functionalId) {
        var projectFunctionalMock = functionalsMock.filter(function (functional) {
            return functional.id === functionalId;
        });
        var projectFunctional = new Entity(projectFunctionalMock[0].id, projectFunctionalMock[0].name);
        return projectFunctional;
    }
    _loadProjectSubFunctional(subFunctionalsMock, subFunctionalId) {
        var projectSubFunctionalMock = subFunctionalsMock.filter(function (subFunctional) {
            return subFunctional.id === subFunctionalId;
        });
        var projectSubFunctional = new ChildEntity(projectSubFunctionalMock[0].id, projectSubFunctionalMock[0].name, projectSubFunctionalMock[0].parentId);
        return projectSubFunctional;
    }
    //private loadProjectDistrict(districtId: number, regionId: number): District {
    //    var projectDistrict = districtsMock.filter(function(district){
    //        return district.id === districtId;
    //    });
    //    var district: District = new District(projectDistrict[0].id, projectDistrict[0].name, regionId);
    //    return district;
    //}
    _loadProjectContacts(projectId) {
        var contacts = new Array();
        var filteredContacts = contactsMock.filter(function (contact) {
            return contact.projectId === projectId;
        });
        filteredContacts.forEach(function (element) {
            contacts.push(new ProjectContact(element.id, projectId, element.name, element.number));
        });
        return contacts;
    }
}
//# sourceMappingURL=ProjectLoadService.js.map