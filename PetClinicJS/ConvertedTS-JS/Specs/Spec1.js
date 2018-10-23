"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../Utilities/Utils");
const MenuPage_1 = require("../Pages/MenuPage");
const protractor_1 = require("protractor");
const OwnersPage_1 = require("../Pages/OwnersPage");
const OwnersData_1 = require("../TestData/OwnersData");
const AllOwnersPage_1 = require("../Pages/AllOwnersPage");
let menuPage = new MenuPage_1.MenuPage();
let ownersPage = new OwnersPage_1.Ownerspage();
let allOwners = new AllOwnersPage_1.AllOwnersPage();
describe("Owners", () => {
    beforeEach(() => {
        Utils_1.Utils.goToHomePage();
    });
    it("Add a new owner-check telephone validation", () => {
        // Utils.goToHomePage();
        menuPage.clickOwnersButton();
        menuPage.clickAddOwnersButton();
        ownersPage.addInformation(OwnersData_1.OwnersData.GigelPhonevalidation.firstName, OwnersData_1.OwnersData.GigelPhonevalidation.lastName, OwnersData_1.OwnersData.GigelPhonevalidation.address, OwnersData_1.OwnersData.GigelPhonevalidation.city, OwnersData_1.OwnersData.GigelPhonevalidation.telephone);
        ownersPage.addTelephone("vvv");
        expect(ownersPage.isErrorDisplayed()).toBeTruthy();
        expect(ownersPage.getErrorMessage()).toMatch("Phone number only accept digits");
    });
    it("Add a new owner-happy path", () => {
        // Utils.goToHomePage();
        menuPage.clickOwnersButton();
        menuPage.clickAddOwnersButton();
        // ownersPage.addInformation(OwnersData.GigelHappyPath.firstName,OwnersData.GigelHappyPath.lastName,OwnersData.GigelHappyPath.address,OwnersData.GigelHappyPath.city,OwnersData.GigelHappyPath.telephone);
        ownersPage.addInformationForModel(OwnersData_1.OwnersData.GigelHappyPath);
        ownersPage.clickOnAddOwnerButton();
        protractor_1.browser.sleep(2000);
    });
    it("Check if the introduced owner is present", () => {
        menuPage.clickOwnersButton();
        menuPage.clickAllOwnersButton();
        expect(allOwners.getOwnerName(OwnersData_1.OwnersData.GigelHappyPath.firstName, OwnersData_1.OwnersData.GigelHappyPath.lastName)).toBeTruthy();
        ;
    });
});
