import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Region} from "../Model/Classifiers/Region";
import {District} from "../Model/Classifiers/District";
import {LoaderService} from "../Services/LoaderService";

@Component ({
    selector: 'sys-district',
    templateUrl: 'templates/district.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    providers: [LoaderService]
})

export class DistrictComponent {
    public districts: Array<District>;
    public selectedDistrict: District;

    constructor(loaderService: LoaderService) {
        var selectedRegion = new Region(2, "Brong-Ahafo");
        //this.selectedDistrict = new District(8, "Kintampo South District", selectedRegion);
        this.districts = loaderService.loadDistricts(selectedRegion);
        //this.testInput="test";
    }

    public onSelect(): void {

    }

    public getData(): void {
        alert(JSON.stringify(this.selectedDistrict));
    }
}