import {$, browser, by, element} from "protractor";
import {OwnerModel} from "../Models/OwnerModel";

export class Ownerspage{
    //elements
    firstNameField = $("#firstName");
    lastNameField =$("#lastName");
    addressField = $("#address");
    cityField = $("#city");
    telephoneField = $("#telephone");
    errorMessage = $(".help-block");
    addOwnerButton = $("[type=submit]");

    addInformation(firstName:string,lastname: string,address : string,city:string,telephone:string){
        this.firstNameField.sendKeys(firstName);
        this.lastNameField.sendKeys(lastname);
        this.addressField.sendKeys(address);
        this.cityField.sendKeys(address);
        this.telephoneField.sendKeys(telephone);
    }

    addInformationForModel(owner: OwnerModel){
        this.firstNameField.sendKeys(owner.firstName);
        this.lastNameField.sendKeys(owner.lastName);
        this.addressField.sendKeys(owner.address);
        this.cityField.sendKeys(owner.city);
        this.telephoneField.sendKeys(owner.telephone);
    }
    addTelephone(telephone:string){
        this.telephoneField.clear();
        this.telephoneField.sendKeys(telephone);
    }

    isErrorDisplayed(){
        var EC = browser.ExpectedConditions;
        return EC.presenceOf(this.errorMessage);
    }

    getErrorMessage(){
        return this.errorMessage.getText().then(message => {
            return message;
        })
    }

    clickOnAddOwnerButton(): void{
        this.addOwnerButton.click();
    }

}