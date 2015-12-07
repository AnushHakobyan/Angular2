import { bootstrap } from "angular2/angular2";
import { AppComponent } from "./app";
import { ProjectLoadService } from "./Services/ProjectLoadService";
import { ClassifierLoadService } from "./Services/ClassifierLoadService";
bootstrap(AppComponent, [ProjectLoadService, ClassifierLoadService]);
//# sourceMappingURL=bootstrap.js.map