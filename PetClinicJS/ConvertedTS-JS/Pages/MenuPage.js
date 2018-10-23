"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const built_1 = require("protractor/built");
class MenuPage {
    constructor() {
        this.menuItems = built_1.element.all(built_1.by.css(".nav.navbar-nav li a"));
        this.homeButton = this.menuItems.get(0);
        this.ownersButton = this.menuItems.get(1);
        this.veterinarians = this.menuItems.get(4);
        this.petTypesButton = this.menuItems.get(7);
        this.specialitiesButton = this.menuItems.get(8);
        this.allOwnerButton = this.menuItems.get(2);
        this.addNewOwnerButton = this.menuItems.get(3);
        this.allVeterinariasButton = this.menuItems.get(5);
        this.addNewVeterinariasButton = this.menuItems.get(6);
    }
    clickOwnersButton() {
        this.ownersButton.click();
    }
    clickAddOwnersButton() {
        this.addNewOwnerButton.click();
    }
    clickAllOwnersButton() {
        this.allOwnerButton.click();
    }
    clickVeteriniariasButton() {
        this.veterinarians.click();
    }
    clickAddVeteriniariasButton() {
        this.addNewVeterinariasButton.click();
    }
    clickAllVeterinariasButton() {
        this.allVeterinariasButton.click();
    }
}
exports.MenuPage = MenuPage;
