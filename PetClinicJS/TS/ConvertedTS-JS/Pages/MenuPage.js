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
    }
    clickOwnersButton() {
        this.ownersButton.click();
    }
}
exports.MenuPage = MenuPage;
