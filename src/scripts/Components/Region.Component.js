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
import { Component, CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/angular2';
import { LoaderService } from "../Services/LoaderService";
import { Region } from "../Model/Classifiers/Region";
export let RegionComponent = class {
    constructor(loaderService) {
        this.selectedRegion = new Region(2, "Brong-Ahafo");
        this.regions = loaderService.loadRegions();
    }
};
RegionComponent = __decorate([
    Component({
        selector: 'sys-region',
        templateUrl: 'templates/region.html',
        directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
        providers: [LoaderService]
    }), 
    __metadata('design:paramtypes', [LoaderService])
], RegionComponent);
// export class RegionComponent {
//    public regions: Array<Region>;
//    @Input() project: Project;
//
//    constructor(loaderService: LoaderService) {
//        this.regions = loaderService.loadRegions();
//    }
//} 
//# sourceMappingURL=Region.Component.js.map