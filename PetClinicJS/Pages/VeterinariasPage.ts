import {$, $$} from "protractor";
import {VeterinariasModel} from "../Models/VeterinariasModel";

export class VeterinariasPage{

    firstNameField = $("#firstName");
    lastNameField =$("#lastName");
    type =$("#specialties");
    typeList=$$("#specialties option");
    savevetButton = $("[type=submit]");


    addInformation(firstName:string,lastname: string){
        this.firstNameField.sendKeys(firstName);
        this.lastNameField.sendKeys(lastname);
    }

    clickTypeVetLast(): void {
     this.type.click();
     //this.typeList.first().click();
     this.typeList.last().click();
    }


    clickSaveVeterinarias() : void{
        this.savevetButton.click();
    }

    clearAddInformation():void{
        this.firstNameField.clear();
        this.lastNameField.clear();
    }
}