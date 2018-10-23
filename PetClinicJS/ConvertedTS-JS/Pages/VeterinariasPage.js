"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class VeterinariasPage {
    constructor() {
        this.firstNameField = protractor_1.$("#firstName");
        this.lastNameField = protractor_1.$("#lastName");
        this.type = protractor_1.$("#specialties");
        this.typeList = protractor_1.$$("#specialties option");
        this.savevetButton = protractor_1.$("[type=submit]");
    }
    addInformation(firstName, lastname) {
        this.firstNameField.sendKeys(firstName);
        this.lastNameField.sendKeys(lastname);
    }
    clickTypeVetLast() {
        this.type.click();
        //this.typeList.first().click();
        this.typeList.last().click();
    }
    clickSaveVeterinarias() {
        this.savevetButton.click();
    }
    clearAddInformation() {
        this.firstNameField.clear();
        this.lastNameField.clear();
    }
}
exports.VeterinariasPage = VeterinariasPage;
