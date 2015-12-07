import {Component, View, Inject, CORE_DIRECTIVES} from "angular2/angular2"
import {Router, ROUTER_DIRECTIVES} from "angular2/router"
import {Project} from "../Model/Project";
import {ProjectLoadService} from "../Services/ProjectLoadService";
import {Routes} from "../Configs/Route.Config"

@Component({
    selector: "sys-portfolio"
})

@View({
    templateUrl: "templates/portfolio.html",
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    styles: ['.title{cursor:pointer}']
})

@Inject(ProjectLoadService)
export class Portfolio {
    private _projects: Array<Project>;
    public selectedProject: Project;

    constructor(private projectLoadService: ProjectLoadService, private router: Router) {
        this._projects = projectLoadService.getAllProjects();
    }

    public get projects(): Array<Project> {
        return this._projects;
    }

    public goToProjectDetails(project: Project): void {
        this.selectedProject = project;
        this.router.navigate(['/' + Routes.detail.as, {id: this.selectedProject.id}]);
    }
}

