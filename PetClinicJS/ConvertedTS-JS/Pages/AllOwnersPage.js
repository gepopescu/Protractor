"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class AllOwnersPage {
    constructor() {
        this.allowners = protractor_1.$$(".ownerFullName a");
    }
    getOwnerName(firstName, lastname) {
        return this.allowners.getText().then(nameOwner => {
            return nameOwner.includes(firstName + " " + lastname);
            // console.log(nameOwner);
        });
    }
}
exports.AllOwnersPage = AllOwnersPage;
