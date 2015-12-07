import {Component, View, Input, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Project} from "../Model/Project";
import {LoaderService} from "../Services/LoaderService";
import {ProjectContact} from "../Model/Functionals/ProjectContact";

@Component({
    selector: 'project-contacts',
    providers: [LoaderService]
})

@View({
    templateUrl: 'templates/contactList.html',
    styleUrls: ['styles/style.css'],
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class ContactsComponent {
    private _contacts: Array<ProjectContact>;
    private _currentProjectId: number;
    public MOCKED_CONTACT_ID: number = 10;

    constructor() {}

    addContact(name, phoneNumber): void {
        var newContact = this._createProjectContact(name, phoneNumber);
        this._contacts.push(newContact);
    }

    @Input()
    public set contacts(contacts:  Array<ProjectContact>){
        this._contacts = contacts;
    }

    public get contacts(): Array<ProjectContact> {
        return this._contacts;
    }

    @Input()
    public set project_id(projectId: number) {
        this._currentProjectId = projectId;
    }

    private _createProjectContact(contactName: string, phoneNumber: string): ProjectContact {
        var generatedId: number = this.MOCKED_CONTACT_ID + this._contacts[this._contacts.length - 1].id;
        var addedContact: ProjectContact = new ProjectContact(generatedId,  this._currentProjectId, contactName, phoneNumber);
        return addedContact;
    }

    public removeContact() {

    }
}