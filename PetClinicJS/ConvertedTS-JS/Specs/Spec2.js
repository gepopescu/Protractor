"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MenuPage_1 = require("../Pages/MenuPage");
const VeterinariasPage_1 = require("../Pages/VeterinariasPage");
const Utils_1 = require("../Utilities/Utils");
const protractor_1 = require("protractor");
const AllVeterinariaspage_1 = require("../Pages/AllVeterinariaspage");
const EditVeterinariaspage_1 = require("../Pages/EditVeterinariaspage");
const VeterinariasData_1 = require("../TestData/VeterinariasData");
let menuPage = new MenuPage_1.MenuPage();
let veterinariaspage = new VeterinariasPage_1.VeterinariasPage();
let allVeterin = new AllVeterinariaspage_1.AllVeterinariasPage();
let editVet = new EditVeterinariaspage_1.EditVeterinariaspage();
describe("Veterinarias", () => {
    beforeEach(() => {
        Utils_1.Utils.goToHomePage();
    });
    it("Add a new veterinarias", () => {
        // Utils.goToHomePage();
        menuPage.clickVeteriniariasButton();
        menuPage.clickAddVeteriniariasButton();
        veterinariaspage.addInformation(VeterinariasData_1.VeterinariasData.HsppyPath.firstName, VeterinariasData_1.VeterinariasData.HsppyPath.lastName);
        veterinariaspage.clickTypeVetLast();
        veterinariaspage.clickSaveVeterinarias();
        protractor_1.browser.sleep(2000);
    });
    it("Check if the introduced veterianarias is present", () => {
        menuPage.clickVeteriniariasButton();
        menuPage.clickAllVeterinariasButton();
        expect(allVeterin.getVeterinariasName(VeterinariasData_1.VeterinariasData.HsppyPath.firstName, VeterinariasData_1.VeterinariasData.HsppyPath.lastName)).toBeTruthy();
    });
    it("Edit vet", () => {
        menuPage.clickVeteriniariasButton();
        menuPage.clickAllVeterinariasButton();
        allVeterin.getEditButton(VeterinariasData_1.VeterinariasData.HsppyPath.firstName, VeterinariasData_1.VeterinariasData.HsppyPath.lastName);
        veterinariaspage.clearAddInformation();
        veterinariaspage.addInformation(VeterinariasData_1.VeterinariasData.EditPath.firstName, VeterinariasData_1.VeterinariasData.EditPath.lastName);
        editVet.clickTypeVetFirst();
        editVet.clickElement();
        editVet.clickSaveVeterinarias();
        protractor_1.browser.sleep(2000);
        allVeterin.getDeleteButton(VeterinariasData_1.VeterinariasData.EditPath.firstName, VeterinariasData_1.VeterinariasData.EditPath.lastName);
        protractor_1.browser.sleep(2000);
    });
});
