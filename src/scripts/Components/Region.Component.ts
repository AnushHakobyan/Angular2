import {Component, Input, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {LoaderService} from "../Services/LoaderService";
import {Region} from "../Model/Classifiers/Region";
import {Project} from "../Model/Project";

@Component ({
    selector: 'sys-region',
    templateUrl: 'templates/region.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    providers: [LoaderService]
})

export class RegionComponent {
    public regions: Array<Region>;
    public selectedRegion: Region;

    constructor(loaderService: LoaderService) {
        this.selectedRegion = new Region(2, "Brong-Ahafo");
        this.regions = loaderService.loadRegions();
    }

    //public onSelect(): void {
    //
    //}
    //
    //public getData(): void {
    //    alert(JSON.stringify(this.selectedRegion));
    //}
}
// export class RegionComponent {
//    public regions: Array<Region>;
//    @Input() project: Project;
//
//    constructor(loaderService: LoaderService) {
//        this.regions = loaderService.loadRegions();
//    }
//}