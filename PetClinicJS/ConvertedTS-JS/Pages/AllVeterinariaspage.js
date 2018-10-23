"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AllVeterinariasPage {
    constructor() {
        this.allVeterinarias = protractor_1.$$(" table.table.table-striped tr > td:nth-child(1)");
        this.editButton = protractor_1.$$("table.table.table-striped td:nth-child(3) > button.btn.btn-default:nth-child(1)");
        this.deleteButton = protractor_1.$$("table.table.table-striped td:nth-child(3) > button.btn.btn-default:nth-child(2)");
    }
    getEditButton(firstName, lastname) {
        this.allVeterinarias.getText().then(nameVet => {
            for (var i = 0; i < nameVet.length; i++) {
                console.log(nameVet[i]);
                if (nameVet[i] == firstName + " " + lastname) {
                    var poz = i;
                    console.log(nameVet[poz]);
                    console.log(poz);
                }
            }
            this.editButton.get(poz).click();
        });
    }
    getVeterinariasName(firstName, lastname) {
        return this.allVeterinarias.getText().then(nameVet => {
            return nameVet.includes(firstName + " " + lastname);
            // console.log(nameOwner);
        });
    }
    getDeleteButton(firstName, lastname) {
        this.allVeterinarias.getText().then(nameVet => {
            for (var i = 0; i < nameVet.length; i++) {
                if (nameVet[i] == firstName + " " + lastname) {
                    var poz = i;
                    console.log(nameVet[poz]);
                    console.log(poz);
                }
            }
            this.deleteButton.get(poz).click();
        });
    }
}
exports.AllVeterinariasPage = AllVeterinariasPage;
