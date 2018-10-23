"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class EditVeterinariaspage {
    constructor() {
        this.type = protractor_1.$(".mat-form-field-infix");
        this.typeList = protractor_1.$$(".mat-option-text");
        this.savevetButton = protractor_1.$("button.btn.btn-default:nth-child(3)");
        this.element = protractor_1.$("body:nth-child(2)");
    }
    clickTypeVetFirst() {
        this.type.click();
        this.typeList.first().click();
        // this.savevetButton.click()
        // this.typeList.last().click();
    }
    clickSaveVeterinarias() {
        this.savevetButton.click();
    }
    clickElement() {
        this.element.click();
    }
}
exports.EditVeterinariaspage = EditVeterinariaspage;
