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
import { Component, View, Inject, CORE_DIRECTIVES } from "angular2/angular2";
import { Router, ROUTER_DIRECTIVES } from "angular2/router";
import { ProjectLoadService } from "../Services/ProjectLoadService";
import { Routes } from "../Configs/Route.Config";
export let Portfolio = class {
    constructor(projectLoadService, router) {
        this.projectLoadService = projectLoadService;
        this.router = router;
        this._projects = projectLoadService.getAllProjects();
    }
    get projects() {
        return this._projects;
    }
    goToProjectDetails(project) {
        this.selectedProject = project;
        this.router.navigate(['/' + Routes.detail.as, { id: this.selectedProject.id }]);
    }
};
Portfolio = __decorate([
    Component({
        selector: "sys-portfolio"
    }),
    View({
        templateUrl: "templates/portfolio.html",
        directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
        styles: ['.title{cursor:pointer}']
    }),
    Inject(ProjectLoadService), 
    __metadata('design:paramtypes', [ProjectLoadService, Router])
], Portfolio);
//# sourceMappingURL=Portfolio.Component.js.map