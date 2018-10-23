"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../Utilities/Utils");
const MenuPage_1 = require("../Pages/MenuPage");
const protractor_1 = require("protractor");
let menuPage = new MenuPage_1.MenuPage();
describe("Owners", () => {
    beforeEach(() => {
        Utils_1.Utils.goToHomePage();
    });
    it("Add a new owner", () => {
        // Utils.goToHomePage();
        menuPage.clickOwnersButton();
        protractor_1.browser.sleep(5000);
    });
});
