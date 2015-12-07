import { Portfolio } from "../Components/Portfolio.Component";
import { ProjectForm } from "../Components/ProjectForm.Component";
export const Routes = {
    portfolio: {
        path: '/',
        as: 'Portfolio',
        component: Portfolio,
        link: ['/Portfolio']
    },
    detail: {
        path: '/detail/:id',
        as: 'Detail',
        component: ProjectForm,
        link: ['/Detail']
    }
};
export const APP_ROUTES = Object.keys(Routes).map((name) => Routes[name]);
//# sourceMappingURL=Route.Config.js.map