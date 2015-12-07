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
import { Component, provide } from "angular2/angular2";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from "angular2/router";
import { Routes, APP_ROUTES } from "./Configs/Route.Config";
import { ClassifierLoadService } from "./Services/ClassifierLoadService";
import { ProjectLoadService } from "./Services/ProjectLoadService";
export let AppComponent = class {
    constructor(clService, prService) {
        this.routes = Routes;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'my-app',
        templateUrl: 'templates/app.html',
        directives: [ROUTER_DIRECTIVES],
        providers: [ROUTER_PROVIDERS,
            provide(LocationStrategy, { useClass: HashLocationStrategy })]
    }),
    RouteConfig(APP_ROUTES), 
    __metadata('design:paramtypes', [ClassifierLoadService, ProjectLoadService])
], AppComponent);
//# sourceMappingURL=app.js.map