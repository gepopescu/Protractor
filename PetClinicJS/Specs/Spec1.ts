import {Utils} from "../Utilities/Utils";
import {MenuPage} from "../Pages/MenuPage";
import {browser} from "protractor";
import {Ownerspage} from "../Pages/OwnersPage";
import {OwnersData} from "../TestData/OwnersData";
import {AllOwnersPage} from "../Pages/AllOwnersPage";


let menuPage = new MenuPage();
let ownersPage = new Ownerspage();
let allOwners = new AllOwnersPage();
describe("Owners",() =>{
    beforeEach(()=>{
        Utils.goToHomePage();
    });

    it("Add a new owner-check telephone validation", () => {
        // Utils.goToHomePage();
        menuPage.clickOwnersButton();
        menuPage.clickAddOwnersButton();


        ownersPage.addInformation(OwnersData.GigelPhonevalidation.firstName,OwnersData.GigelPhonevalidation.lastName,OwnersData.GigelPhonevalidation.address,OwnersData.GigelPhonevalidation.city,OwnersData.GigelPhonevalidation.telephone);
        ownersPage.addTelephone("vvv");
        expect(ownersPage.isErrorDisplayed()).toBeTruthy();
        expect(ownersPage.getErrorMessage()).toMatch("Phone number only accept digits");


    }) ;

    it("Add a new owner-happy path", () => {
        // Utils.goToHomePage();
        menuPage.clickOwnersButton();
        menuPage.clickAddOwnersButton();

       // ownersPage.addInformation(OwnersData.GigelHappyPath.firstName,OwnersData.GigelHappyPath.lastName,OwnersData.GigelHappyPath.address,OwnersData.GigelHappyPath.city,OwnersData.GigelHappyPath.telephone);
        ownersPage.addInformationForModel(OwnersData.GigelHappyPath);
        ownersPage.clickOnAddOwnerButton();
        browser.sleep(2000);


    }) ;

    it("Check if the introduced owner is present",() => {
        menuPage.clickOwnersButton();
        menuPage.clickAllOwnersButton();
        expect(allOwners.getOwnerName(OwnersData.GigelHappyPath.firstName,OwnersData.GigelHappyPath.lastName)).toBeTruthy();;
    })



});