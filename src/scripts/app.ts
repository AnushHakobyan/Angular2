import {Component, provide} from "angular2/angular2";
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from "angular2/router";
import {Routes, APP_ROUTES} from "./Configs/Route.Config"
import {ClassifierLoadService} from "./Services/ClassifierLoadService";
import {ProjectLoadService} from "./Services/ProjectLoadService";


@Component({
    selector: 'my-app',
    templateUrl: 'templates/app.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS,
                provide(LocationStrategy, {useClass: HashLocationStrategy})]
})

@RouteConfig(APP_ROUTES)
export class AppComponent{
    routes = Routes;

    constructor(clService: ClassifierLoadService, prService: ProjectLoadService) {

    }
}
