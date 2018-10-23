import {$, $$} from "protractor";

export class EditVeterinariaspage {

    type =$(".mat-form-field-infix");
    typeList =$$(".mat-option-text");
    savevetButton = $("button.btn.btn-default:nth-child(3)");
    element = $("body:nth-child(2)");

    clickTypeVetFirst(): void {
        this.type.click();
        this.typeList.first().click();
       // this.savevetButton.click()
        // this.typeList.last().click();
    }

    clickSaveVeterinarias() : void{
        this.savevetButton.click();
    }

    clickElement(): void{
        this.element.click();
    }

}