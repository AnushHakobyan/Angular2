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
import { Region } from "../Model/Classifiers/Region";
import { LoaderService } from "../Services/LoaderService";
export let DistrictComponent = class {
    constructor(loaderService) {
        var selectedRegion = new Region(2, "Brong-Ahafo");
        //this.selectedDistrict = new District(8, "Kintampo South District", selectedRegion);
        this.districts = loaderService.loadDistricts(selectedRegion);
        //this.testInput="test";
    }
    onSelect() {
    }
    getData() {
        alert(JSON.stringify(this.selectedDistrict));
    }
};
DistrictComponent = __decorate([
    Component({
        selector: 'sys-district',
        templateUrl: 'templates/district.html',
        directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
        providers: [LoaderService]
    }), 
    __metadata('design:paramtypes', [LoaderService])
], DistrictComponent);
//# sourceMappingURL=District.Component.js.map