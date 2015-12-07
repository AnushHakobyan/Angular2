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
import { Component, View, Input, CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/angular2';
import { LoaderService } from "../Services/LoaderService";
import { ProjectContact } from "../Model/Functionals/ProjectContact";
export let ContactsComponent = class {
    constructor() {
        this.MOCKED_CONTACT_ID = 10;
    }
    addContact(name, phoneNumber) {
        var newContact = this._createProjectContact(name, phoneNumber);
        this._contacts.push(newContact);
    }
    set contacts(contacts) {
        this._contacts = contacts;
    }
    get contacts() {
        return this._contacts;
    }
    set project_id(projectId) {
        this._currentProjectId = projectId;
    }
    _createProjectContact(contactName, phoneNumber) {
        var generatedId = this.MOCKED_CONTACT_ID + this._contacts[this._contacts.length - 1].id;
        var addedContact = new ProjectContact(generatedId, this._currentProjectId, contactName, phoneNumber);
        return addedContact;
    }
    removeContact() {
    }
};
Object.defineProperty(ContactsComponent.prototype, "contacts",
    __decorate([
        Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], ContactsComponent.prototype, "contacts", Object.getOwnPropertyDescriptor(ContactsComponent.prototype, "contacts")));
Object.defineProperty(ContactsComponent.prototype, "project_id",
    __decorate([
        Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], ContactsComponent.prototype, "project_id", Object.getOwnPropertyDescriptor(ContactsComponent.prototype, "project_id")));
ContactsComponent = __decorate([
    Component({
        selector: 'project-contacts',
        providers: [LoaderService]
    }),
    View({
        templateUrl: 'templates/contactList.html',
        styleUrls: ['styles/style.css'],
        directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [])
], ContactsComponent);
//# sourceMappingURL=Contacts.Component.js.map