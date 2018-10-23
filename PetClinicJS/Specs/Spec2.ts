import {MenuPage} from "../Pages/MenuPage";
import {VeterinariasPage} from "../Pages/VeterinariasPage";
import {Utils} from "../Utilities/Utils";
import {browser} from "protractor";
import {AllVeterinariasPage} from "../Pages/AllVeterinariaspage";
import {EditVeterinariaspage} from "../Pages/EditVeterinariaspage";
import {VeterinariasData} from "../TestData/VeterinariasData";

let menuPage = new MenuPage();

let veterinariaspage = new VeterinariasPage();
let allVeterin = new AllVeterinariasPage();
let editVet = new EditVeterinariaspage();

describe("Veterinarias",() => {
    beforeEach(() => {
        Utils.goToHomePage();
    });

    it("Add a new veterinarias", () => {
        // Utils.goToHomePage();
        menuPage.clickVeteriniariasButton();
        menuPage.clickAddVeteriniariasButton();
        veterinariaspage.addInformation(VeterinariasData.HsppyPath.firstName,VeterinariasData.HsppyPath.lastName);
        veterinariaspage.clickTypeVetLast();
        veterinariaspage.clickSaveVeterinarias();
        browser.sleep(2000);


    });

    it("Check if the introduced veterianarias is present",() => {
        menuPage.clickVeteriniariasButton();
        menuPage.clickAllVeterinariasButton();
        expect(allVeterin.getVeterinariasName(VeterinariasData.HsppyPath.firstName,VeterinariasData.HsppyPath.lastName)).toBeTruthy();
         });

    it("Edit vet",() => {
            menuPage.clickVeteriniariasButton();
            menuPage.clickAllVeterinariasButton();
            allVeterin.getEditButton(VeterinariasData.HsppyPath.firstName,VeterinariasData.HsppyPath.lastName);
            veterinariaspage.clearAddInformation();
            veterinariaspage.addInformation(VeterinariasData.EditPath.firstName,VeterinariasData.EditPath.lastName);
            editVet.clickTypeVetFirst();
            editVet.clickElement();
            editVet.clickSaveVeterinarias();
            browser.sleep(2000);
            allVeterin.getDeleteButton(VeterinariasData.EditPath.firstName,VeterinariasData.EditPath.lastName);
            browser.sleep(2000);
       });
});
